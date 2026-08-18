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
      <div className="page-body">
        <section className="rte">
          <p>
            <Link to="/" className="text-link">Back to Home</Link>
          </p>
        </section>
      </div>
    </article>
  )
}

export default NotFoundPage
