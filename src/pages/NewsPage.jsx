import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { newsItems } from '../data/site'
import '../styles/starter.css'

function NewsPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'News' }]}
        title="News & Updates"
        lede="Stories from campus, program updates, and press. Individual posts do not count against the 15-page SOW."
      />

      <section className="band">
        <div className="wrap">
          <span className="eyebrow">Stories</span>
          <h2 style={{ marginBottom: 32 }}>What is happening at GSM</h2>
          <div className="story-grid">
            {newsItems.map((item) => (
              <article className="story-card" key={item.title}>
                <div className="story-card__img" aria-hidden="true" />
                <span className="eyebrow">{item.date} · {item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <Link to={item.path} className="text-link">Read More &rarr;</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Get stories in your inbox</h2>
        <p>Family resources and the newsletter live next door.</p>
        <Link to="/newsletters" className="btn btn--primary">Newsletters</Link>
      </section>
    </article>
  )
}

export default NewsPage
