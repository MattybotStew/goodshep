import { Link } from 'react-router-dom'
import { LOREM_EXTRA, LOREM_LONG } from '../data/placeholders'
import './AboutMissionSection.css'

const HOME_COPY = [
  LOREM_LONG,
  LOREM_EXTRA,
]

const ABOUT_COPY = [
  'Good Shepherd Manor is home to 124 men with developmental disabilities on our campus in Momence, Illinois, about 45 miles south of Chicago. The Brothers of the Good Shepherd and our professional staff have provided high standards of care.',
  'Our programs stimulate the body, mind, and spirit through health care, life-skills instruction, vocational training, recreation, and Special Olympics. From accessible group homes to a 7,000 square foot infirmary, we continue to grow so every man we serve can live with dignity and security.',
]

export default function AboutMissionSection({
  showReadMore = true,
  overlapHero = false,
  compactBottom = false,
  placeholderCopy = false,
}) {
  const sectionClass = [
    'home-mission',
    overlapHero && 'home-mission--overlap',
    compactBottom && 'home-mission--compact-bottom',
  ]
    .filter(Boolean)
    .join(' ')

  const paragraphs = placeholderCopy ? HOME_COPY : ABOUT_COPY

  return (
    <section className={sectionClass}>
      <div className="home-mission__inner">
        <div className="home-mission__copy">
          <p className="home-mission__eyebrow">About Us</p>
          <h2>A community of care, growth, and dignity for over 50 years.</h2>
          {paragraphs.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
          {showReadMore && (
            <Link to="/about" className="home-mission__btn">
              Read More
            </Link>
          )}
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
  )
}
