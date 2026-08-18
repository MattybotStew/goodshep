import PageHero from '../components/PageHero'
import '../styles/starter.css'

function ContactPage() {
  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <article>
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        title="Contact Us"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      <section className="band">
        <div className="wrap form-grid">
          <form onSubmit={onSubmit} id="visit">
            <span className="eyebrow">Contact form</span>
            <h2 style={{ marginBottom: 20 }}>Send a message</h2>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="reason">I am writing about</label>
              <select id="reason" name="reason" defaultValue="visit">
                <option value="visit">Schedule a visit</option>
                <option value="programs">Programs</option>
                <option value="jobs">Careers</option>
                <option value="give">Giving / Foundation</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="btn btn--primary">Send</button>
          </form>

          <aside className="contact-aside">
            <h3>Good Shepherd Manor</h3>
            <p>
              (815) 472-3700<br />
              P.O. Box 260<br />
              4129 N. State Route 1-17<br />
              Momence, IL 60954
            </p>
            <h3>Hours</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <h3>Map</h3>
            <div className="map-ph" aria-label="Map placeholder" />
          </aside>
        </div>
      </section>

      <section className="band band--alt" id="staff">
        <div className="wrap">
          <span className="eyebrow">Staff directory</span>
          <h2>Who to ask</h2>
          <div className="list-row">
            <span className="list-row__meta">Main</span>
            <div>
              <h3>Front office</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. (815) 472-3700</p>
            </div>
          </div>
          <div className="list-row">
            <span className="list-row__meta">Giving</span>
            <div>
              <h3>GSM Foundation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="list-row">
            <span className="list-row__meta">Hiring</span>
            <div>
              <h3>Careers</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band" id="thank">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <span className="eyebrow">Thank a staff member</span>
          <h2>Send a note of thanks</h2>
          <form onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="thank-from">Your name</label>
              <input id="thank-from" name="from" required />
            </div>
            <div className="field">
              <label htmlFor="thank-staff">Staff member</label>
              <input id="thank-staff" name="staff" required />
            </div>
            <div className="field">
              <label htmlFor="thank-note">Note</label>
              <textarea id="thank-note" name="note" required />
            </div>
            <button type="submit" className="btn btn--primary">Send thanks</button>
          </form>
        </div>
      </section>
    </article>
  )
}

export default ContactPage
