import { Link } from "react-router-dom";
import { programs, stories } from "../data/site";
import AboutMissionSection from "../components/AboutMissionSection";
import HomeIntroStrip from "../components/HomeIntroStrip";
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

      <HomeIntroStrip variant="home" />

      <ImpactSection />

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
                <h3>{p.homeName || p.name}</h3>
                <p>{p.desc}</p>
                <Link to={p.path} className="home-program-card__link">
                  Learn more &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutMissionSection />

      <section className="home-stories" aria-label="Stories">
        <div className="home-stories__inner">
          <header className="home-stories__header">
            <div className="home-stories__intro">
              <h2>What&rsquo;s Happening at GSM</h2>
              <p>
                From our annual Fall Festival to family cookouts on campus,
                there&rsquo;s always something happening at Good Shepherd Manor.
              </p>
            </div>
            <Link to="/events" className="home-stories__more">
              See all events &rarr;
            </Link>
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
