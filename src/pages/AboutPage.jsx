import { Link } from 'react-router-dom'
import AboutMissionSection from '../components/AboutMissionSection'
import HomeIntroStrip from '../components/HomeIntroStrip'
import PageHero from '../components/PageHero'
import { affiliations } from '../data/site'
import '../styles/starter.css'

function AboutPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'About Us' }]}
        title="About Us"
        lede="Good Shepherd Manor is a residential community in Momence, Illinois, serving men with intellectual and developmental disabilities with compassion, dignity, and purpose."
      />

      <AboutMissionSection showReadMore={false} overlapHero compactBottom />

      <HomeIntroStrip variant="about" />

      <section className="split anchor" id="mission">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Mission, Vision &amp; Values</span>
            <h2>Why we exist</h2>
            <p>
              To serve the needs of men with intellectual and developmental
              disabilities who are not capable of earning their own livelihood
              or meeting their basic needs in a non-structured environment. We
              strive to improve and maintain skills that enhance the quality of
              life for all our residents.
            </p>
            <p>
              Our vision is a community where every man is known, valued, and
              supported to grow in body, mind, and spirit — with dignity,
              purpose, and belonging at the center of daily life on campus.
            </p>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      <section className="split band--alt anchor" id="history">
        <div className="wrap split__inner split--flip">
          <div className="split__copy">
            <span className="eyebrow">Our History</span>
            <h2>More than fifty years in Momence</h2>
            <p>
              Good Shepherd Manor was founded in 1971 to provide a structured,
              supportive home for men with intellectual and developmental
              disabilities. What began as a single campus has grown into a
              community of group homes, day programs, and on-site health
              services.
            </p>
            <p>
              Over the decades, GSM has expanded with handicapped-accessible
              residences, a Work Center for meaningful employment, and a
              7,000-square-foot infirmary — always with the same commitment to
              care, growth, and dignity.
            </p>
          </div>
          <div className="img-ph img-ph--tall img-ph--soft" aria-hidden="true" />
        </div>
      </section>

      <section className="band anchor" id="affiliations">
        <div className="wrap">
          <span className="eyebrow">Affiliations</span>
          <h2>Partners in care</h2>
          <p className="prose" style={{ marginBottom: 24, maxWidth: 640 }}>
            Good Shepherd Manor is supported by the Brothers of the Good
            Shepherd and community partners who share our commitment to serving
            men with intellectual and developmental disabilities.
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
            Good Shepherd Manor is committed to ensuring digital accessibility
            for people with disabilities. We continually improve the user
            experience for everyone and apply relevant accessibility standards.
          </p>
          <p>
            We aim to meet WCAG 2.2 Level AA. If you have trouble using any part
            of this site, please contact us and we will help.
          </p>
          <Link to="/contact" className="text-link">
            Contact us about accessibility &rarr;
          </Link>
        </div>
      </section>
    </article>
  )
}

export default AboutPage
