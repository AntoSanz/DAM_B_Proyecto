
import React, { useEffect, useState } from 'react';
import './CustomSpinner.css';

function CustomSpinner({ visible = true, duration = 0, showText = false, showSpinnerIcon = true, text = 'Cargando...' }) {
  const [internalVisible, setInternalVisible] = useState(visible);

  useEffect(() => {
    setInternalVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (duration > 0 && visible) {
      const timer = setTimeout(() => {
        setInternalVisible(false);
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [duration, visible]);

  if (!internalVisible) return null;
  return (
    <div className="custom-spinner-overlay">
      <div className="custom-spinner-backdrop" />
      <div className="custom-spinner-center">
        {showSpinnerIcon && (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">{text}</span>
          </div>
        )}
        {showText && (
          <div className="custom-spinner-text">{text}</div>
        )}
      </div>
    </div>
  );
}

export default CustomSpinner;
