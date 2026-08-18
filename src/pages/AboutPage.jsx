import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AboutMissionSection from '../components/AboutMissionSection'
import HomeIntroStrip from '../components/HomeIntroStrip'
import PageHero from '../components/PageHero'
import { affiliations } from '../data/site'
import '../styles/starter.css'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const loremLong =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const history = [
  {
    year: 'Prior to 1970',
    text: 'Parents with children who have intellectual and developmental disabilities were accustomed to tenaciously advocating for education and every other customary service their child required.',
  },
  {
    year: '1970',
    text: 'Desiring residential care for their sons with close proximity to Chicago, a group of parents and their friends learned the St. Jude Seminary located in Momence, IL in Kankakee County, sitting on 60 beautiful acres was for sale. The families secured the property and engaged the Little Brothers of the Good Shepherd to administer a program of Christian care for their sons and others also desiring services for their sons.',
  },
  {
    year: '1971',
    text: 'Good Shepherd Manor opened as a licensed shelter care facility for 122 men.',
  },
  { year: '1979', text: 'Carl J. Reuter Activity Center opened.' },
  {
    year: '1981',
    text: 'Good Shepherd Manor Foundation was formed as a supporting organization.',
  },
  {
    year: '1993',
    text: 'St. Anne Work Center opened and is now located on the main Manor campus.',
  },
  {
    year: '1995',
    text: 'Herbstritt House and Lombard House were opened as Intermediate Care Facilities.',
  },
  { year: '1997', text: 'Blagrave House opened.' },
  {
    year: '1998',
    text: 'Webber, Robert Leonard, Hayes, Hill Street, and Colnon-Wild Houses opened and named.',
  },
  { year: '1999', text: 'Maple Street House opened.' },
  { year: '2001', text: 'Opler, Willow Street and CILA 11 Houses opened.' },
  {
    year: '2004',
    text: 'CILA 13 and William J. and Helen Dwyer McAllister Infirmary opened.',
  },
  { year: '2005', text: 'Park Street House opened.' },
  { year: '2006', text: 'Hill House closed and Gladiolus Street House opened.' },
  { year: '2007', text: 'Shepherd Endowment Society formed.' },
  {
    year: '2009',
    text: 'CILA 13 named the Helen McAllister House and Willow Street named the William McAllister House.',
  },
  { year: '2010', text: 'Gladiolus Street House named Zurek House.' },
  {
    year: '2012',
    text: 'Blagrave House torn down on campus. Brother Alphonsus Michael Brown House opened; CILA 11 named Blagrave-Biesemier House.',
  },
]

function AboutPage() {
  const scrollRef = useRef(null)
  const barRef = useRef(null)
  const [thumb, setThumb] = useState({ width: 100, left: 0 })

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const update = () => {
      const max = el.scrollWidth - el.clientWidth
      if (max <= 0) {
        setThumb({ width: 100, left: 0 })
        return
      }
      const width = Math.max(10, (el.clientWidth / el.scrollWidth) * 100)
      setThumb({ width, left: (el.scrollLeft / max) * (100 - width) })
    }

    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollToPointer = (clientX) => {
    const el = scrollRef.current
    const bar = barRef.current
    if (!el || !bar) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    el.scrollLeft = ratio * (el.scrollWidth - el.clientWidth)
  }

  const handleBarPointerDown = (e) => {
    scrollToPointer(e.clientX)
    const onMove = (ev) => scrollToPointer(ev.clientX)
    const onUp = () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
  }

  return (
    <article>
      <PageHero
        align="left"
        crumbs={[{ label: 'About Us' }]}
        title="About Us"
        lede="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
      />

      <AboutMissionSection showReadMore={false} overlapHero compactBottom placeholderCopy />

      <HomeIntroStrip variant="about" />

      <section className="split anchor" id="mission">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Mission, Vision &amp; Values</span>
            <h2>Why we exist</h2>
            <p>{loremLong}</p>
            <p>{lorem}</p>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      {/* Our History — client timeline content */}
      <section className="band band--alt anchor" id="history">
        <div className="wrap">
          <div className="timeline__head">
            <div className="img-ph img-ph--soft timeline__photo" aria-hidden="true" />
            <div>
              <span className="eyebrow">Our History</span>
              <h2>A Timeline of Caring</h2>
            </div>
          </div>
          <div
            className="timeline-scroll"
            ref={scrollRef}
            role="region"
            aria-label="Good Shepherd Manor history timeline"
            tabIndex={0}
          >
            <ol className="timeline">
              {history.map((entry) => (
                <li className="timeline__item" key={entry.year}>
                  <span className="timeline__year">{entry.year}</span>
                  <p className="timeline__text">{entry.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div
            className="timeline-bar"
            ref={barRef}
            onPointerDown={handleBarPointerDown}
            aria-hidden="true"
          >
            <div
              className="timeline-bar__thumb"
              style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
            />
          </div>
        </div>
      </section>

      <section className="split anchor" id="affiliations">
        <div className="wrap split__inner">
          <div className="split__copy">
            <span className="eyebrow">Affiliations</span>
            <h2>Partners in care</h2>
            <p>{lorem}</p>
            <div className="partners">
              {affiliations.map((name) => (
                <span className="partner-pill" key={name}>{name}</span>
              ))}
            </div>
          </div>
          <div className="img-ph img-ph--tall" aria-hidden="true" />
        </div>
      </section>

      <section className="split band--alt anchor" id="accessibility">
        <div className="wrap split__inner split--flip">
          <div className="split__copy">
            <span className="eyebrow">Accessibility Statement</span>
            <h2>This site should work for everyone</h2>
            <p>{lorem}</p>
            <p>{lorem}</p>
            <Link to="/contact" className="text-link">
              Contact us about accessibility &rarr;
            </Link>
          </div>
          <div className="img-ph img-ph--tall img-ph--soft" aria-hidden="true" />
        </div>
      </section>
    </article>
  )
}

export default AboutPage
