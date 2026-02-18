import '../App.css'
import { t } from '../locales/i18n'

function MainContent({ children }) {
  return (
    <main className="main-content">
      {children ? (
        children
      ) : (
        <div className="index-container">
          <header>
            <h1>{t('welcome.title')}</h1>
            <p>{t('welcome.subtitle')}</p>
          </header>
          <section className="hero">
            <h2>{t('hero.title')}</h2>
            <p>{t('hero.desc')}</p>
          </section>
        </div>
      )}
    </main>
  )
}

export default MainContent
