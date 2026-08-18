import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { LOREM, LOREM_LONG } from '../data/placeholders'
import '../styles/starter.css'

const paths = [
  { title: 'Ways to Give', path: '/ways-to-give' },
  { title: 'Shepherd Endowment Society', path: '/shepherd-endowment-society' },
  { title: 'Events', path: '/events' },
]

function FoundationPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Support GSM' }]}
        title="GSM Foundation"
        lede={LOREM_LONG}
      />

      <div className="page-body">
        <section className="rte">
          <h2>How the Foundation serves the Manor</h2>
          <p>{LOREM_LONG}</p>
          <p>{LOREM}</p>
        </section>

        <section className="rte">
          <h2>Ways to support</h2>
          <ul className="rte-links">
            {paths.map((p) => (
              <li key={p.path}>
                <h3>{p.title}</h3>
                <p>{LOREM}</p>
                <Link to={p.path} className="text-link">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

export default FoundationPage
