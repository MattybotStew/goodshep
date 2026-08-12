import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import '../styles/starter.css'

const events = [
  {
    id: 'fall-festival',
    title: 'Fall Festival',
    when: 'October 2026',
    text: 'A family-friendly day on campus that funds programs and lets the community meet the men we serve. Games, food, and the 35th year of a GSM tradition.',
  },
  {
    id: 'golf',
    title: 'Golf Invitational',
    when: 'Summer',
    text: 'The anniversary golf outing brings sponsors and friends together for a day that directly supports residential and day programs.',
  },
  {
    id: 'family',
    title: 'Family Events',
    when: 'Year-round',
    text: 'Smaller gatherings for families and friends of residents — visits, holiday moments, and campus celebrations.',
  },
]

function EventsPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Support GSM', to: '/support-gsm' }, { label: 'Events' }]}
        title="Events"
        lede="Come to campus. Meet the men. Help fund the year ahead."
      />

      {events.map((e, i) => (
        <section
          key={e.id}
          id={e.id}
          className={`split anchor ${i % 2 === 1 ? 'band--alt' : ''}`}
        >
          <div className={`wrap split__inner ${i % 2 === 1 ? 'split--flip' : ''}`}>
            <div className="split__copy">
              <span className="eyebrow">{e.when}</span>
              <h2>{e.title}</h2>
              <p>{e.text}</p>
            </div>
            <div className={`img-ph img-ph--tall ${i % 2 === 1 ? 'img-ph--soft' : ''}`} aria-hidden="true" />
          </div>
        </section>
      ))}

      <section className="cta-band">
        <h2>Sponsor or volunteer</h2>
        <p>Events run on friends, sponsors, and a few extra hands.</p>
        <Link to="/contact" className="btn btn--primary">Get involved</Link>
      </section>
    </article>
  )
}

export default EventsPage
