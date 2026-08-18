import { Link } from 'react-router-dom'
import { programs } from '../data/site'
import { LOREM, LOREM_SHORT } from '../data/placeholders'
import './ProgramsServicesSection.css'

export default function ProgramsServicesSection({ showViewAll = true }) {
  return (
    <section className="programs-services">
      <div className="programs-services__container">
        <div className="programs-services__header">
          <div className="programs-services__intro">
            <h2>Our Programs &amp; Services</h2>
            <p>{LOREM}</p>
          </div>
          {showViewAll && (
            <Link to="/programs" className="programs-services__more">
              View all programs &rarr;
            </Link>
          )}
        </div>
        <div className="programs-services__grid">
          {programs.map((p) => (
            <article className="programs-services__card" key={p.path}>
              <div className="programs-services__icon" aria-hidden="true" />
              <h3>{p.homeName || p.name}</h3>
              <p>{LOREM_SHORT}</p>
              <Link to={p.path} className="programs-services__link">
                Learn more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
