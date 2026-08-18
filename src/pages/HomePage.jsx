import { Link } from "react-router-dom";
import { programs, stories } from "../data/site";
import ImpactSection from "../components/ImpactSection";
import readMoreArrow from "../assets/home-stories/read-more-arrow.svg";
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

      <ImpactSection />

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

      <section className="home-donate-band" aria-label="Donate">
        <div className="home-donate-band__inner">
          <div className="home-donate-band__copy">
            <h2>We can create a better tomorrow</h2>
            <p>
              Every dollar counts and helps us bring hope and essential resources to
              those in need.
            </p>
          </div>
          <Link to="/ways-to-give" className="home-donate-band__btn">
            Donate Now
          </Link>
        </div>
      </section>

      <section className="home-programs">
        <div className="home-programs__container">
          <div className="home-programs__header">
            <div className="home-programs__intro">
              <h2>Our Programs &amp; Services</h2>
              <p>
                We offer well-maintained residential facilities paired with a
                comprehensive Health Care Program and meaningful day programs.
              </p>
            </div>
            <Link to="/programs" className="home-programs__more">
              View all programs &rarr;
            </Link>
          </div>
          <div className="home-program-grid">
            {programs.map((p) => (
              <article className="home-program-card" key={p.path}>
                <div className="home-program-card__icon" aria-hidden="true" />
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <Link to={p.path} className="home-program-card__link">
                  Learn more &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-stories" aria-label="Stories">
        <div className="home-stories__inner">
          <header className="home-stories__header">
            <h2>Inspiring tales of transformation</h2>
            <p>
              Get inspired by the remarkable stories of transformation through
              Good Shepherd Manor. Join us in making a positive impact today.
            </p>
          </header>

          <div className="home-stories__cards">
            {stories.map((story, index) => (
              <article
                className={`home-stories__card${index === 0 ? " home-stories__card--left" : " home-stories__card--right"}`}
                key={story.path}
              >
                <div className="home-stories__card-inner">
                  <div className="home-stories__photo" aria-hidden="true" />
                  <div className="home-stories__copy">
                    <h3>{story.title}</h3>
                    <p>{story.excerpt}</p>
                  </div>
                  <Link to={story.path} className="home-stories__link">
                    Read More
                    <img
                      className="home-stories__link-icon"
                      src={readMoreArrow}
                      alt=""
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
