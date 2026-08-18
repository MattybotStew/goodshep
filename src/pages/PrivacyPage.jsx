import PageHero from '../components/PageHero'
import '../styles/starter.css'

function PrivacyPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Privacy Policy' }]}
        title="Privacy Policy"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <section className="band band--narrow">
        <div className="wrap prose">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </article>
  )
}

export default PrivacyPage
