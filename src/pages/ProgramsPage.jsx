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
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Our Work</span>
            <h2>Four programs, one community</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
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
