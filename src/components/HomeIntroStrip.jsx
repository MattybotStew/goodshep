import { Link } from 'react-router-dom'
import './HomeIntroStrip.css'

const INTRO_COLUMNS = [
  {
    num: '01.',
    title: 'Projects',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    path: '/programs',
  },
  {
    num: '02.',
    title: 'Get Involved',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    path: '/support-gsm',
  },
  {
    num: '03.',
    title: 'Donate',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    path: '/ways-to-give',
  },
]

export default function HomeIntroStrip({ variant = 'home' }) {
  return (
    <section
      className={`home-intro home-intro--${variant}`}
      aria-label="Ways to engage"
    >
      <div className="home-intro__card">
        {INTRO_COLUMNS.map((col) => (
          <article className="home-intro__col" key={col.num}>
            <p className="home-intro__num">{col.num}</p>
            <h2>{col.title}</h2>
            <p>{col.description}</p>
            <Link to={col.path}>Learn more &rarr;</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
