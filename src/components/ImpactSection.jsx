import { impactStats } from "../data/site";
import { LOREM_LONG } from "../data/placeholders";

export default function ImpactSection() {
  return (
    <section className="home-impact">
      <div className="home-impact__container">
        <div className="home-impact__intro">
          <div className="home-impact__header">
            <div className="home-impact__col">
              <h2>Our Mission &amp; Vision: Serving with Dignity</h2>
            </div>
            <div className="home-impact__col">
              <p>{LOREM_LONG}</p>
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
      </div>
    </section>
  );
}
