import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { affiliations } from '../data/site'
import '../styles/starter.css'

function AboutPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'About Us' }]}
        title="About Us"
        lede="A home and a community in Momence, Illinois — serving men with intellectual and developmental disabilities since 1971."
      />

      <section className="split" id="mission">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Mission, Vision & Values</span>
            <h2>Why we exist</h2>
            <p>
              To serve the needs of men with intellectual and developmental disabilities
              who are not capable of earning their own livelihood or meeting their basic
              needs in a non-structured environment.
            </p>
            <p>
              We strive to improve and maintain skills that enhance the quality of life
              for all our residents.
            </p>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      <section className="split band--alt" id="history">
        <div className="wrap split__inner split--flip">
          <div className="split__copy">
            <span className="eyebrow">Our History</span>
            <h2>More than fifty years in Momence</h2>
            <p>
              Good Shepherd Manor opened in 1971. The campus has grown from a single
              home into a community of residences, day programs, vocational work, and
              on-site health services.
            </p>
            <p>
              The mission has not changed: a structured, compassionate home for men
              who need one.
            </p>
          </div>
          <div className="img-ph img-ph--tall img-ph--soft" aria-hidden="true" />
        </div>
      </section>

      <section className="band" id="affiliations">
        <div className="wrap">
          <span className="eyebrow">Affiliations</span>
          <h2>Partners in care</h2>
          <p className="prose" style={{ marginBottom: 24, maxWidth: 640 }}>
            We work with state agencies, local health providers, and community partners
            so residents can stay connected to services beyond our campus.
          </p>
          <div className="partners">
            {affiliations.map((name) => (
              <span className="partner-pill" key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--alt anchor" id="accessibility">
        <div className="wrap prose" style={{ maxWidth: 760 }}>
          <span className="eyebrow">Accessibility Statement</span>
          <h2>This site should work for everyone</h2>
          <p>
            Good Shepherd Manor is committed to providing a website that is accessible
            to the widest possible audience, regardless of technology or ability.
          </p>
          <p>
            We aim to meet WCAG 2.2 Level AA. If you have trouble using any part of
            this site, please contact us and we will help.
          </p>
          <Link to="/contact" className="text-link">Contact us about accessibility &rarr;</Link>
        </div>
      </section>

      <section className="cta-band">
        <h2>Come see the campus</h2>
        <p>Schedule a visit or talk with our team about programs and admissions.</p>
        <Link to="/contact" className="btn btn--primary">Contact Us</Link>
      </section>
    </article>
  )
}

export default AboutPage
