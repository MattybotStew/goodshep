import { Link } from "react-router-dom";
import { newsItems, programs } from "../data/site";
import ImpactSection from "../components/ImpactSection";
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
            <h2>Our journey of compassion and hope</h2>
            <p>
              Join us on a journey towards compassion and hope. Through our
              non-profit organisation, we strive to make a positive impact on
              the world. Give back to your community and be a part of something
              greater than yourself.
            </p>
            <p>
              A transformational journey towards bringing hope and compassion to
              the world.
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

      <ImpactSection />

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

      <section className="home-involved">
        <div className="home-wrap home-involved__inner">
          <h2>Get Involved</h2>
          <p>
            Your support makes a difference in the lives of the men at Good
            Shepherd Manor.
          </p>
          <div className="home-pathways">
            <Link to="/ways-to-give" className="home-pathway">
              <span className="home-pathway__icon" aria-hidden="true">
                &#10084;
              </span>
              <h3>Donate</h3>
              <p>
                Your gift provides essential care, programs, and enrichment.
              </p>
              <span>Give now &rarr;</span>
            </Link>
            <Link to="/support-gsm" className="home-pathway">
              <span className="home-pathway__icon" aria-hidden="true">
                &#10003;
              </span>
              <h3>Volunteer</h3>
              <p>
                Attend an event or volunteer your time to support our community.
              </p>
              <span>Get involved &rarr;</span>
            </Link>
            <Link to="/careers" className="home-pathway">
              <span className="home-pathway__icon" aria-hidden="true">
                &#9679;
              </span>
              <h3>Careers</h3>
              <p>
                Join our team as a Direct Service Provider and make an impact.
              </p>
              <span>View openings &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
