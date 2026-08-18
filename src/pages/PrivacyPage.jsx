import PageHero from '../components/PageHero'
import { LOREM, LOREM_LONG } from '../data/placeholders'
import '../styles/starter.css'

function PrivacyPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Privacy Policy' }]}
        title="Privacy Policy"
        lede={LOREM_LONG}
      />
      <div className="page-body">
        <section className="rte">
          <h2>How we use this site</h2>
          <p>{LOREM}</p>
          <p>{LOREM_LONG}</p>
        </section>
      </div>
    </article>
  )
}

export default PrivacyPage
