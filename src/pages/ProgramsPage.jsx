import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { programs } from '../data/site'
import '../styles/starter.css'

function ProgramsPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Programs' }]}
        title="Programs & Services"
        lede="Well-maintained homes, a full health program, and meaningful days — all on one campus."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Our Work</span>
            <h2>Four programs, one community</h2>
            <p>
              Residents live here, spend their days here, and receive health care here.
              Programs are designed to work together so no one is shuffled between
              disconnected providers.
            </p>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      <section className="band band--alt">
        <div className="wrap">
          <div className="work-grid">
            {programs.map((p) => (
              <Link to={p.path} className="work-card" key={p.path}>
                <div className="work-card__img" aria-hidden="true" />
                <div className="work-card__body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="text-link">Learn more &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </article>
  )
}

export default ProgramsPage
