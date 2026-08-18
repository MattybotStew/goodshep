import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { LOREM, LOREM_LONG } from '../data/placeholders'
import '../styles/starter.css'

function EndowmentPage() {
  return (
    <article>
      <PageHero
        crumbs={[
          { label: 'Support GSM', to: '/support-gsm' },
          { label: 'Shepherd Endowment Society' },
        ]}
        title="Shepherd Endowment Society"
        lede={LOREM_LONG}
      />

      <div className="page-body">
        <section className="rte">
          <h2>Stewardship that outlives a gift</h2>
          <p>{LOREM_LONG}</p>
          <p>{LOREM}</p>
          <Link to="/contact" className="text-link">
            Ask about joining
          </Link>
        </section>
      </div>
    </article>
  )
}

export default EndowmentPage
