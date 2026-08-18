import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import '../styles/starter.css'

function EndowmentPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Support GSM', to: '/support-gsm' }, { label: 'Shepherd Endowment Society' }]}
        title="Shepherd Endowment Society"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Lasting support</span>
            <h2>Stewardship that outlives a gift</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
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
