import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import '../styles/starter.css'

const paths = [
  {
    index: '01.',
    title: 'Ways to Give',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    path: '/ways-to-give',
  },
  {
    index: '02.',
    title: 'Shepherd Endowment',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    path: '/shepherd-endowment-society',
  },
  {
    index: '03.',
    title: 'Events',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    path: '/events',
  },
]

function FoundationPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Support GSM' }]}
        title="GSM Foundation"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="split">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Support GSM</span>
            <h2>How the Foundation serves the Manor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
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
