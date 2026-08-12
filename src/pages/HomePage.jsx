import { Link } from 'react-router-dom'
import { affiliations, stats, stories } from '../data/site'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="wrap home-hero__inner">
          <h1>Compassionate care for men with intellectual &amp; developmental disabilities</h1>
          <p>
            A nurturing home, meaningful work, and a caring community for over 100 men
            in Momence, Illinois since 1971.
          </p>
          <div className="btn-row home-hero__btns">
            <Link to="/ways-to-give" className="btn btn--primary">Donate Now</Link>
            <Link to="/programs" className="btn btn--ghost">Explore Programs</Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap num-grid">
          <article className="num-card">
            <div className="num-card__index">01.</div>
            <h3>Programs</h3>
            <p>Residential living, day services, vocational work, and on-site health care.</p>
            <Link to="/programs" className="text-link">See our work &rarr;</Link>
          </article>
          <article className="num-card">
            <div className="num-card__index">02.</div>
            <h3>Get involved</h3>
            <p>Volunteer at an event, join the Foundation, or apply as a Direct Service Provider.</p>
            <Link to="/support-gsm" className="text-link">Get involved &rarr;</Link>
          </article>
          <article className="num-card">
            <div className="num-card__index">03.</div>
            <h3>Donate</h3>
            <p>Your gift funds homes, programs, and daily care for the men we serve.</p>
            <Link to="/ways-to-give" className="text-link">Learn more &rarr;</Link>
          </article>
        </div>
      </section>

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">About Us</span>
            <h2>Our journey of compassion and hope</h2>
            <p>
              Good Shepherd Manor was founded in 1971 to serve men with intellectual and
              developmental disabilities who need a structured home and a community that
              will not give up on them.
            </p>
            <p>
              We strive to improve and maintain skills that enhance the quality of life
              for every resident.
            </p>
            <Link to="/about" className="text-link">Read More &rarr;</Link>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      <section className="impact">
        <div className="wrap">
          <div className="impact__intro">
            <span className="eyebrow">Our Impact</span>
            <h2>The difference we make in Momence</h2>
            <p>
              For more than five decades we have provided a home, work, and health care
              on one campus — so the men we serve can live with dignity.
            </p>
          </div>
          <div className="impact__grid">
            {stats.map((s) => (
              <div className="impact__stat" key={s.label}>
                <span className="impact__value">{s.value}</span>
                <span className="impact__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>We can create a better tomorrow</h2>
        <p>Every gift supports housing, day programs, and the nursing care our residents rely on.</p>
        <Link to="/ways-to-give" className="btn btn--primary">Donate Now</Link>
      </section>

      <section className="band">
        <div className="wrap">
          <span className="eyebrow">Stories</span>
          <h2 className="home-stories__title">Inspiring tales from our community</h2>
          <div className="story-grid">
            {stories.map((s) => (
              <article className="story-card" key={s.title}>
                <div className="story-card__img" aria-hidden="true" />
                <span className="eyebrow">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.excerpt}</p>
                <Link to={s.path} className="text-link">Read More &rarr;</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--alt">
        <div className="wrap">
          <span className="eyebrow">Our Partners</span>
          <h2 className="home-stories__title">Affiliations</h2>
          <div className="partners">
            {affiliations.map((name) => (
              <span className="partner-pill" key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
