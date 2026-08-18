import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import '../styles/starter.css'

function EndowmentPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Support GSM', to: '/support-gsm' }, { label: 'Shepherd Endowment Society' }]}
        title="Shepherd Endowment Society"
        lede="A society of friends who invest in Good Shepherd Manor beyond a single year."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Lasting support</span>
            <h2>Stewardship that outlives a gift</h2>
            <p>
              The Shepherd Endowment Society recognizes donors who make a planned or
              endowed gift. The principal is held; earnings help sustain care.
            </p>
            <p>
              Membership details and recognition levels will be confirmed with the
              Foundation before launch.
            </p>
            <Link to="/contact" className="text-link">Ask about joining &rarr;</Link>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

    </article>
  )
}

export default EndowmentPage
