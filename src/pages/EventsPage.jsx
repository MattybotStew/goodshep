import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import '../styles/starter.css'

const events = [
  {
    id: 'fall-festival',
    title: 'Fall Festival',
    when: 'October 2026',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  },
  {
    id: 'golf',
    title: 'Golf Invitational',
    when: 'Summer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'family',
    title: 'Family Events',
    when: 'Year-round',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
]

function EventsPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Support GSM', to: '/support-gsm' }, { label: 'Events' }]}
        title="Events"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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

    </article>
  )
}

export default EventsPage
