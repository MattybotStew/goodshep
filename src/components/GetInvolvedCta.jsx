import { Link } from 'react-router-dom'
import './GetInvolvedCta.css'

const PATHWAYS = [
  {
    icon: '\u2764',
    title: 'Donate',
    description: 'Your gift provides essential care, programs, and enrichment.',
    linkLabel: 'Give now \u2192',
    path: '/ways-to-give',
  },
  {
    icon: '\u2713',
    title: 'Volunteer',
    description:
      'Attend an event or volunteer your time to support our community.',
    linkLabel: 'Get involved \u2192',
    path: '/events',
  },
  {
    icon: '\u25CF',
    title: 'Careers',
    description:
      'Join our team as a Direct Service Provider and make an impact.',
    linkLabel: 'View openings \u2192',
    path: '/careers',
  },
]

export default function GetInvolvedCta() {
  return (
    <section className="global-cta" aria-labelledby="global-cta-heading">
      <div className="global-cta__inner">
        <header className="global-cta__header">
          <h2 id="global-cta-heading">Get Involved</h2>
          <p>
            Your support makes a difference in the lives of the men at Good
            Shepherd Manor.
          </p>
        </header>
        <div className="global-cta__grid">
          {PATHWAYS.map((item) => (
            <Link key={item.path} to={item.path} className="global-cta__card">
              <span className="global-cta__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="global-cta__link">{item.linkLabel}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
