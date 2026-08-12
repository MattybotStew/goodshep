import { Link } from "react-router-dom";
import { newsItems, programs } from "../data/site";
import ImpactSection from "../components/ImpactSection";
import getInvolvedPhoto from "../assets/get-involved.png";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__photo" aria-hidden="true" />
        <div className="home-hero__inner">
          <h1>A Community of Compassion, Dignity, and Purpose.</h1>
          <p>
            Good Shepherd Manor provides hands-on programs, caring services, and
            a supportive home for men with intellectual and developmental
            disabilities.
          </p>
          <Link to="/careers" className="home-btn home-btn--blue">
            Now Hiring! Apply Today
          </Link>
        </div>
      </section>

      <section className="home-intro" aria-label="Ways to engage">
        <div className="home-intro__card">
          <article className="home-intro__col">
            <p className="home-intro__num">01.</p>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <Link to="/programs">Learn more &rarr;</Link>
          </article>
          <article className="home-intro__col">
            <p className="home-intro__num">02.</p>
            <h2>Get Involved</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
            <Link to="/support-gsm">Learn more &rarr;</Link>
          </article>
          <article className="home-intro__col">
            <p className="home-intro__num">03.</p>
            <h2>Donate</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <Link to="/ways-to-give">Learn more &rarr;</Link>
          </article>
        </div>
      </section>

      <section className="home-mission">
        <div className="home-mission__inner">
          <div className="home-mission__copy">
            <p className="home-mission__eyebrow">About Us</p>
            <h2>A community of care, growth, and dignity for over 50 years.</h2>
            <p>
              Good Shepherd Manor is a residential facility for 124 men with
              developmental disabilities in Momence, IL, about 45 miles south of
              Chicago. The Brothers of the Good Shepherd and our professional
              staff are dedicated to providing high standards of care.
            </p>
            <p>
              We offer academic and vocational stimulation to prevent regression
              and develop skills. Our programs and daily activities stimulate
              the body, mind, and spirit through broad-range health care,
              instruction in functional life skills, vocational training,
              recreation, and Special Olympics competition. A Work Center
              provides meaningful jobs for local industry, including sorting,
              packaging, and assembling.
            </p>
            <p>
              Our growth has included extensive phases of building
              handicapped-accessible group homes, including a home for residents
              with Alzheimer&rsquo;s Disease. In 2004, our 7,000 square foot
              infirmary opened to provide on-site medical, wellness, and
              rehabilitative care.
            </p>
            <p>
              With the support of individual donations and fundraising events,
              we continue to meet the needs of our residents as they age,
              ensuring a secure and caring future for all.
            </p>
            <Link to="/about" className="home-mission__btn">
              Read More
            </Link>
          </div>
          <div className="home-mission__mosaic" aria-hidden="true">
            <div className="home-mission__col">
              <div className="home-mission__ph home-mission__ph--tall" />
              <div className="home-mission__ph home-mission__ph--short" />
            </div>
            <div className="home-mission__col home-mission__col--offset">
              <div className="home-mission__ph home-mission__ph--short" />
              <div className="home-mission__ph home-mission__ph--tall" />
            </div>
          </div>
        </div>
      </section>

      <ImpactSection />

      <section className="home-programs">
        <div className="home-wrap">
          <h2>Our Programs &amp; Services</h2>
          <p className="home-lead">
            We offer well-maintained residential facilities paired with a
            comprehensive Health Care Program and meaningful day programs.
          </p>
          <div className="home-program-grid">
            {programs.map((p) => (
              <Link to={p.path} className="home-program-card" key={p.path}>
                <div className="home-program-card__img" aria-hidden="true" />
                <div className="home-program-card__body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span>Learn more &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/programs" className="home-more">
            View all programs &rarr;
          </Link>
        </div>
      </section>

      <section className="home-involved" aria-label="Get Involved">
        <div className="home-involved__card">
          <div className="home-involved__media">
            <img
              className="home-involved__photo"
              src={getInvolvedPhoto}
              alt="Two smiling volunteers in Volunteer t-shirts holding donation boxes of medicine and food"
            />
          </div>
          <div className="home-involved__body">
            <p className="home-involved__label">Get Involved</p>
            <h2>Join our movement for change</h2>
            <p>
              Join our non-profit organisation and be a part of our movement
              for positive change. We empower communities, support vulnerable
              individuals and strive towards building an equitable society.
              Together, we can create a better world. Join us now!
            </p>
            <p>
              Become part of a transformative movement by supporting our
              non-profit organization. Together we can make lasting change.
            </p>
            <Link to="/support-gsm" className="home-involved__btn">
              Register Now
            </Link>
          </div>
        </div>
      </section>

      <section className="home-news">
        <div className="home-wrap home-news__grid">
          <div>
            <h2>What&rsquo;s Happening at GSM</h2>
            <div className="home-feed">
              {newsItems.map((item) => (
                <article className="home-feed-item" key={item.title}>
                  <div className="home-feed-item__thumb" aria-hidden="true" />
                  <div>
                    <span className="home-feed-item__meta">
                      {item.date} &middot; {item.tag}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link to="/news" className="home-more home-more--left">
              View all news &rarr;
            </Link>
          </div>

          <div>
            <h2>Upcoming Event</h2>
            <div className="home-event">
              <div className="home-event__img" aria-hidden="true" />
              <div className="home-event__body">
                <span className="home-event__date">October 2026</span>
                <h3>35th Annual Fall Festival</h3>
                <p>
                  A family-friendly event supporting Good Shepherd Manor&rsquo;s
                  mission by funding essential programs and services for the men
                  we serve.
                </p>
                <Link to="/events#fall-festival">Event details &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
