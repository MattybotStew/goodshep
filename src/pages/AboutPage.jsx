import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { affiliations } from '../data/site'
import '../styles/starter.css'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const loremLong =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const values = [
  { title: 'Changing Lives', desc: lorem },
  { title: 'Building Futures', desc: lorem },
  { title: 'Movement for Change', desc: lorem },
  { title: 'Lasting Impact', desc: lorem },
]

function AboutPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'About Us' }]}
        title="About Us"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
      />

      {/* Intro split — template: “Making the world a better place” */}
      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">About GSM</span>
            <h2>Making the world a better place</h2>
            <p>{loremLong}</p>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      {/* Two image cards — template: Changing Lives / Building Futures */}
      <section className="band band--alt">
        <div className="wrap">
          <div className="work-grid">
            <article className="work-card">
              <div className="work-card__img" aria-hidden="true" />
              <div className="work-card__body">
                <h3>Changing Lives</h3>
                <p>{lorem}</p>
              </div>
            </article>
            <article className="work-card">
              <div className="work-card__img" aria-hidden="true" />
              <div className="work-card__body">
                <h3>Building Futures</h3>
                <p>{lorem}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Three numbered cards — GSM sections in the template's numbered slot */}
      <section className="band">
        <div className="wrap">
          <div className="num-grid">
            <article className="num-card anchor" id="history">
              <div className="num-card__index">01.</div>
              <h3>Our History</h3>
              <p>{lorem}</p>
            </article>
            <article className="num-card anchor" id="affiliations">
              <div className="num-card__index">02.</div>
              <h3>Affiliations</h3>
              <p>{lorem}</p>
              <div className="partners">
                {affiliations.map((name) => (
                  <span className="partner-pill" key={name}>{name}</span>
                ))}
              </div>
            </article>
            <article className="num-card anchor" id="accessibility">
              <div className="num-card__index">03.</div>
              <h3>Accessibility</h3>
              <p>{lorem}</p>
              <Link to="/contact" className="text-link">Contact us about accessibility &rarr;</Link>
            </article>
          </div>
        </div>
      </section>

      {/* Donate band — template: “Make a Difference Today” */}
      <section className="cta-band">
        <div className="wrap">
          <h2>Make a Difference Today</h2>
          <p>{loremLong}</p>
          <Link to="/ways-to-give" className="btn btn--light">Donate Today</Link>
        </div>
      </section>

      {/* Vision & Mission split — template: “Our Vision & Mission” */}
      <section className="split band--alt anchor" id="mission">
        <div className="wrap split__inner split--flip">
          <div className="split__copy">
            <span className="eyebrow">Our Vision & Mission</span>
            <h2>Serving with dignity</h2>
            <p>{loremLong}</p>
          </div>
          <div className="img-ph img-ph--tall img-ph--soft" aria-hidden="true" />
        </div>
      </section>

      {/* Four value cards — template: Changing lives / Building futures / Movement for change / Lasting impact */}
      <section className="band">
        <div className="wrap">
          <div className="work-grid work-grid--four">
            {values.map((v) => (
              <article className="work-card" key={v.title}>
                <div className="work-card__img" aria-hidden="true" />
                <div className="work-card__body">
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}

export default AboutPage
