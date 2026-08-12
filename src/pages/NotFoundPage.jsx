import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import '../styles/starter.css'

function NotFoundPage() {
  return (
    <article>
      <PageHero
        title="Page not found"
        lede="That address is not one of the 15 main pages."
      />
      <section className="band">
        <div className="wrap">
          <Link to="/" className="btn btn--primary">Back to Home</Link>
          {' '}
          <Link to="/sitemap" className="text-link">Prototype sitemap</Link>
        </div>
      </section>
    </article>
  )
}

export default NotFoundPage
