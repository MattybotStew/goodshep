import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import '../styles/starter.css'

const paths = [
  {
    index: '01.',
    title: 'Ways to Give',
    desc: 'One-time gifts, monthly giving, and memorial donations.',
    path: '/ways-to-give',
  },
  {
    index: '02.',
    title: 'Shepherd Endowment',
    desc: 'A lasting gift that steadies the Manor for the next generation.',
    path: '/shepherd-endowment-society',
  },
  {
    index: '03.',
    title: 'Events',
    desc: 'Fall Festival, Golf Invitational, and family gatherings.',
    path: '/events',
  },
]

function FoundationPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Support GSM' }]}
        title="GSM Foundation"
        lede="The Foundation raises friends and funds so Good Shepherd Manor can keep being home."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Support GSM</span>
            <h2>How the Foundation serves the Manor</h2>
            <p>
              The GSM Foundation supports residential care, day programs, and enrichment
              that operating funds alone cannot cover.
            </p>
            <p>
              Give, join the Endowment Society, or show up at an event — every path
              stays with the men who live here.
            </p>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      <section className="band band--alt">
        <div className="wrap num-grid">
          {paths.map((p) => (
            <article className="num-card" key={p.path}>
              <div className="num-card__index">{p.index}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <Link to={p.path} className="text-link">Learn more &rarr;</Link>
            </article>
          ))}
        </div>
      </section>

    </article>
  )
}

export default FoundationPage
