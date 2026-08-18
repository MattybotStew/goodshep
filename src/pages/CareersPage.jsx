import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { jobs } from '../data/site'
import '../styles/starter.css'

function CareersPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Careers' }]}
        title="Careers"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Benefits</span>
            <h2>A job that stays with people</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit sed do eiusmod</li>
              <li>Tempor incididunt ut labore et dolore</li>
              <li>Magna aliqua ut enim ad minim veniam</li>
            </ul>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      <section className="band band--alt" id="openings">
        <div className="wrap">
          <span className="eyebrow">Job openings</span>
          <h2>Now hiring</h2>
          {jobs.map((job) => (
            <div className="list-row" key={job.title}>
              <span className="list-row__meta">{job.type}</span>
              <div>
                <h3>{job.title}</h3>
                <p>{job.note}</p>
              </div>
              <Link to="/contact" className="text-link">Apply &rarr;</Link>
            </div>
          ))}
        </div>
      </section>

    </article>
  )
}

export default CareersPage
