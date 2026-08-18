import { impactStats } from "../data/site";

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
              <p>
                To serve the needs of men with intellectual and developmental
                disabilities who are not capable of earning their own livelihood
                or meeting their basic needs in a non-structured environment. We
                strive to improve and maintain skills that enhance the quality of
                life for all our residents.
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
      </div>
    </section>
  );
}
