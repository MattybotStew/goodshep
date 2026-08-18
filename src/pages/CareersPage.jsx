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
        lede="Direct Service Providers are the heart of Good Shepherd Manor. Come work where you are needed."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Benefits</span>
            <h2>A job that stays with people</h2>
            <p>
              DSPs support residents in daily living, activities, and community life.
              Shifts are real work. The men you meet will remember you.
            </p>
            <ul>
              <li>Competitive pay for the region</li>
              <li>Health benefits for eligible full-time staff</li>
              <li>Training and a team that works the same houses</li>
              <li>A campus you can walk — not a scattered caseload</li>
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
