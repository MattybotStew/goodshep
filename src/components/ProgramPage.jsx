import { Link } from 'react-router-dom'
import ArticleSidebar from './ArticleSidebar'
import { LOREM_SHORT } from '../data/placeholders'
import './ProgramPage.css'

const galleryItems = [1, 2, 3, 4, 5, 6]

function ProgramPage({ data }) {
  const {
    name,
    tagline,
    overview,
    features = [],
    sections = [],
    cta,
    related = [],
  } = data

  return (
    <div className="program-page">
      {/* ---------- Hero ---------- */}
      <section className="program-hero">
        <div className="program-hero__overlay" />
        <div className="program-hero__content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb__sep">&rsaquo;</span>
            <Link to="/programs">Programs</Link>
            <span className="breadcrumb__sep">&rsaquo;</span>
            <span className="breadcrumb__current">{name}</span>
          </nav>
          <h1 className="program-hero__title">{name}</h1>
          <p className="program-hero__tagline">{tagline}</p>
        </div>
      </section>

      {/* ---------- Article: sidebar + main ---------- */}
      <div className="article">
        <ArticleSidebar />

        <div className="article__main">
      {/* ---------- Overview ---------- */}
      {overview && (
        <section className="program-overview">
          <div className="program-overview__inner">
            <div
              className={`program-overview__text ${
                overview.imagePosition === 'left' ? 'program-overview__text--right' : ''
              }`}
            >
              <h2 className="program-overview__heading">Overview</h2>
              {overview.paragraphs.map((p, i) => (
                <p key={i} className="program-overview__para">{p}</p>
              ))}
              {overview.bullets && (
                <ul className="program-overview__bullets">
                  {overview.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
            <div
              className={`program-overview__image ${
                overview.imagePosition === 'left' ? 'program-overview__image--left' : ''
              }`}
            />
          </div>
        </section>
      )}

      {/* ---------- Key Features ---------- */}
      {features.length > 0 && (
        <section className="program-features">
          <div className="program-features__inner">
            <h2 className="section-title">Key Features</h2>
            <div className="program-features__grid">
              {features.map((f, i) => (
                <div className="feature-card" key={i}>
                  <span className="feature-card__icon">{f.icon}</span>
                  <h3 className="feature-card__title">{f.title}</h3>
                  {f.desc && <p className="feature-card__desc">{f.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Section blocks (if any) ---------- */}
      {sections.length > 0 && (
        <section className="program-sections">
          {/* Sticky sub-nav */}
          <div className="program-subnav">
            <div className="program-subnav__inner">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="program-subnav__link">
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          {/* Section blocks */}
          {sections.map((s) => (
            <div
              id={s.id}
              key={s.id}
              className={`section-block ${s.imagePosition === 'right' ? 'section-block--reverse' : ''}`}
            >
              <div className="section-block__image" />
              <div className="section-block__content">
                <h3 className="section-block__title">{s.title}</h3>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="section-block__para">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="section-block__bullets">
                    {s.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

          {/* Video */}
          <section className="program-video">
            <h2>Watch our video</h2>
            <p className="program-video__lede">{LOREM_SHORT}</p>
            <div className="video-embed">
              <iframe
                src="https://www.youtube.com/embed/Y9wAUu4rNzE"
                title="Good Shepherd Manor video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>

          {/* Photo gallery */}
          <section className="program-gallery">
            <h2>Photo gallery</h2>
            <p className="program-gallery__lede">{LOREM_SHORT}</p>
            <div className="gallery">
              {galleryItems.map((i) => (
                <div className="img-ph gallery__item" key={i} aria-hidden="true" />
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ---------- CTA Band ---------- */}
      {cta && (
        <section className="program-cta">
          <div className="program-cta__inner">
            <h2 className="program-cta__question">{cta.question}</h2>
            <div className="program-cta__buttons">
              {cta.primary && (
                <Link to={cta.primary.path} className="program-cta__btn program-cta__btn--primary">
                  {cta.primary.label}
                </Link>
              )}
              {cta.secondary && (
                <Link to={cta.secondary.path} className="program-cta__btn program-cta__btn--secondary">
                  {cta.secondary.label}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ---------- Related Programs ---------- */}
      {related.length > 0 && (
        <section className="program-related">
          <div className="program-related__inner">
            <h2 className="section-title">Related Programs</h2>
            <div className="program-related__grid">
              {related.map((r, i) => (
                <Link to={r.path} className="related-card" key={i}>
                  <div className="related-card__image" />
                  <div className="related-card__body">
                    <h3 className="related-card__name">{r.name}</h3>
                    {r.desc && <p className="related-card__desc">{r.desc}</p>}
                    <span className="related-card__link">Learn more &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ProgramPage
