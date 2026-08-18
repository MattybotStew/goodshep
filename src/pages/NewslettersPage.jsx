import PageHero from '../components/PageHero'
import '../styles/starter.css'

const issues = [
  { date: 'Summer 2026', title: 'Summer family update', note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { date: 'Spring 2026', title: 'Spring family update', note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { date: 'Winter 2025', title: 'Winter family update', note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
]

function NewslettersPage() {
  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <article>
      <PageHero
        crumbs={[{ label: 'News', to: '/news' }, { label: 'Newsletters' }]}
        title="Newsletters & Family Resources"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Signup</span>
            <h2>Stay in the loop</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <form onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="nl-email">Email address</label>
                <input id="nl-email" type="email" name="email" autoComplete="email" required />
              </div>
              <button type="submit" className="btn btn--primary">Sign up</button>
            </form>
          </div>
          <div className="img-ph img-ph--tall img-ph--soft" aria-hidden="true" />
        </div>
      </section>

      <section className="band band--alt">
        <div className="wrap">
          <span className="eyebrow">Archive</span>
          <h2>Past issues</h2>
          {issues.map((issue) => (
            <div className="list-row" key={issue.title}>
              <span className="list-row__meta">{issue.date}</span>
              <div>
                <h3>{issue.title}</h3>
                <p>{issue.note}</p>
              </div>
              <span className="text-link">PDF placeholder</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}

export default NewslettersPage
