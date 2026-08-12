import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import '../styles/starter.css'

function WaysToGivePage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Support GSM', to: '/support-gsm' }, { label: 'Ways to Give' }]}
        title="Ways to Give"
        lede="Join us in making a lasting difference. Your donation funds homes, programs, and daily care."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Donate</span>
            <h2>Every gift stays on campus</h2>
            <p>
              Donations support residential living, Community Day Services, vocational
              work, and the Health & Well Being program.
            </p>
            <p>
              Production will use the client’s existing processor. This wire shows
              the layout only.
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
            <p>Give once in any amount. Honor a resident, staff member, or family.</p>
          </article>
          <article className="num-card">
            <div className="num-card__index">02.</div>
            <h3>Monthly giving</h3>
            <p>A recurring gift that we can plan around — groceries, fuel, nursing supplies.</p>
          </article>
          <article className="num-card">
            <div className="num-card__index">03.</div>
            <h3>Planned & memorial</h3>
            <p>Bequests, the Endowment Society, and gifts in memory of someone you love.</p>
            <Link to="/shepherd-endowment-society" className="text-link">Endowment Society &rarr;</Link>
          </article>
        </div>
      </section>

      <section className="cta-band">
        <h2>Ready to give?</h2>
        <p>Use the donation form on the live site, or contact the Foundation for gifts of stock, vehicles, or planned giving.</p>
        <div className="btn-row">
          <Link to="/contact" className="btn btn--primary">Talk to the Foundation</Link>
          <Link to="/events" className="btn btn--ghost">See events</Link>
        </div>
      </section>
    </article>
  )
}

export default WaysToGivePage
