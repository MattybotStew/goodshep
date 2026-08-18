import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import '../styles/starter.css'

function WaysToGivePage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Support GSM', to: '/support-gsm' }, { label: 'Ways to Give' }]}
        title="Ways to Give"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Donate</span>
            <h2>Every gift stays on campus</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      <section className="band band--alt">
        <div className="wrap num-grid">
          <article className="num-card">
            <div className="num-card__index">01.</div>
            <h3>One-time gift</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </article>
          <article className="num-card">
            <div className="num-card__index">02.</div>
            <h3>Monthly giving</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </article>
          <article className="num-card">
            <div className="num-card__index">03.</div>
            <h3>Planned & memorial</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <Link to="/shepherd-endowment-society" className="text-link">Endowment Society &rarr;</Link>
          </article>
        </div>
      </section>

    </article>
  )
}

export default WaysToGivePage
