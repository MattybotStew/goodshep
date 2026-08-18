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
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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

    </article>
  )
}

export default NewsPage
