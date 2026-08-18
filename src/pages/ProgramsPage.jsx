import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { programs } from '../data/site'
import { LOREM, LOREM_LONG } from '../data/placeholders'
import '../styles/starter.css'

function ProgramsPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Programs & Services' }]}
        title="Programs & Services"
        lede={LOREM_LONG}
      />

      <div className="page-body">
        <section className="rte">
          <h2>Four programs, one campus</h2>
          <p>{LOREM}</p>
          <ul className="rte-links">
            {programs.map((p) => (
              <li key={p.path}>
                <h3>{p.name}</h3>
                <p>{LOREM}</p>
                <Link to={p.path} className="text-link">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

export default ProgramsPage
