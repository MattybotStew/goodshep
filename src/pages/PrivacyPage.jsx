import PageHero from '../components/PageHero'
import '../styles/starter.css'

function PrivacyPage() {
  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Privacy Policy' }]}
        title="Privacy Policy"
        lede="How this site handles the information you share with us."
      />
      <section className="band band--narrow">
        <div className="wrap prose">
          <p>
            Good Shepherd Manor respects your privacy. Contact and newsletter forms
            collect only what we need to reply or send updates.
          </p>
          <p>
            We do not sell personal information. Full legal copy will replace this
            placeholder before launch.
          </p>
        </div>
      </section>
    </article>
  )
}

export default PrivacyPage
