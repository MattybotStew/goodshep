import { Link } from "react-router-dom";
import { impactStats } from "../data/site";

export default function ImpactSection() {
  return (
    <section className="home-impact">
      <div className="home-impact__container">
        <div className="home-impact__intro">
          <div className="home-impact__header">
            <div className="home-impact__col">
              <h2>Our Mission &amp; Vision: Serving with Dignity Since 1971</h2>
            </div>
            <div className="home-impact__col">
              <p>
                To serve men with intellectual and developmental disabilities by
                providing a structured, supportive home where they can grow,
                contribute, and live with dignity.
              </p>
            </div>
          </div>
        </div>

        <div className="home-impact__stats">
          {impactStats.map((stat, idx) => (
            <div className="home-impact__stat" key={idx}>
              <p className="home-impact__value">{stat.value}</p>
              <p className="home-impact__stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="home-impact__cta">
          <div className="home-impact__cta-content">
            <h3>We can create a better tomorrow</h3>
            <p>
              Every dollar counts and helps us bring hope and essential
              resources to those in need.
            </p>
          </div>
          <Link to="/ways-to-give" className="home-impact__btn">
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
}
