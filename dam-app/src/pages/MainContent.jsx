import '../App.css'
import { t } from '../locales/i18n'
import SectionCard from '../components/SectionCard/SectionCard'

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

          <section className="d-flex justify-content-center mt-4">
            <SectionCard
              title="Card title"
              subtitle="Card subtitle"
              text="Some quick example text to build on the card title and make up the bulk of the card’s content."
              links={[{ href: '#', text: 'Card link' }, { href: '#', text: 'Another link' }]}
            />
          </section>
        </div>
      )}
    </main>
  )
}

export default MainContent
