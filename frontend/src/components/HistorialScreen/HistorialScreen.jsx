import React, { useEffect, useState } from 'react';
import './HistorialScreen.css';
import { getHistoryByUserId } from '../../data-managers/HistoryDm';
import CustomSpinner from '../CustomSpinner/CustomSpinner';
import { t } from '../../locales/i18n';

function HistorialScreen({ onBack, currentUser }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadOrders() {
      if (!currentUser?.id) {
        if (isMounted) {
          setOrders([]);
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        const data = await getHistoryByUserId(currentUser.id);
        if (isMounted) {
          setOrders(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(t('historial.errorLoad'));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadOrders();

    return () => {
      isMounted = false;
    };
  }, [currentUser]);

  return (
    <section className="historial-screen container mt-4">
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-link me-2" onClick={onBack}>&larr; {t('historial.back')}</button>
        <h2 className="mb-0">{t('historial.title')}</h2>
      </div>

      {loading && (
        <CustomSpinner visible={true} showText={true} text={t('historial.loading')} />
      )}

      {!loading && error && (
        <div className="alert alert-danger">{error}</div>
      )}

      {!loading && !error && orders.length === 0 && (
        <div className="alert alert-info">{t('historial.empty')}</div>
      )}

      {!loading && !error && orders.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">{t('historial.colOrder')}</th>
                <th scope="col">{t('historial.colDetails')}</th>
                <th scope="col">{t('historial.colDate')}</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id ?? index}>
                  <td>{index + 1}</td>
                  <td>{order.order_id ?? order.id}</td>
                  <td>{order.detalles ?? '-'}</td>
                  <td>{order.fecha ? new Date(order.fecha).toLocaleString('es-ES') : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default HistorialScreen;
