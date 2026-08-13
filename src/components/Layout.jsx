import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { HERO_HEADER_PATHS, NAV_ITEMS, isChildActive, isNavItemActive } from '../data/header'
import facebookIcon from '../assets/footer/facebook.svg'
import twitterIcon from '../assets/footer/twitter.svg'
import instagramIcon from '../assets/footer/instagram.svg'
import youtubeIcon from '../assets/footer/youtube.svg'
import './Layout.css'

const FOOTER_ABOUT = [
  { label: 'Our History', path: '/about#history' },
  { label: 'Mission, Vision & Values', path: '/about#mission' },
  { label: 'Our Programs', path: '/programs' },
  { label: 'Affiliations', path: '/about#affiliations' },
]

const FOOTER_GIVE = [
  { label: 'Ways to Give', path: '/ways-to-give' },
  { label: 'GSM Foundation', path: '/support-gsm' },
  { label: 'Shepherd Endowment Society', path: '/shepherd-endowment-society' },
  { label: 'Events', path: '/events' },
]

const FOOTER_SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com', icon: facebookIcon },
  { name: 'Twitter', icon: twitterIcon },
  { name: 'Instagram', icon: instagramIcon },
  { name: 'YouTube', icon: youtubeIcon },
]

function HeaderNav() {
  const location = useLocation()
  const navId = useId()
  const navRef = useRef(null)
  const [openKey, setOpenKey] = useState(null)

  useEffect(() => {
    setOpenKey(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpenKey(null)
    }
    const onPointer = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenKey(null)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [])

  return (
    <nav className="header__nav" ref={navRef} aria-label="Primary">
      <ul className="header__nav-list">
        {NAV_ITEMS.map((item) => {
          const hasChildren = Boolean(item.children?.length)
          const isOpen = openKey === item.path
          const isActive = isNavItemActive(item, location)
          const submenuId = `${navId}-${item.path.replace(/\W+/g, '-')}`

          return (
            <li
              key={item.path}
              className={[
                'header__nav-item',
                hasChildren ? 'header__nav-item--has-children' : '',
                isOpen ? 'is-open' : '',
              ].filter(Boolean).join(' ')}
            >
              <div className="header__nav-parent">
                <NavLink
                  to={item.path}
                  end={item.path !== '/programs'}
                  className={() =>
                    isActive ? 'header__nav-link is-active' : 'header__nav-link'
                  }
                >
                  {item.label}
                </NavLink>
                {hasChildren && (
                  <button
                    type="button"
                    className="header__nav-toggle"
                    aria-expanded={isOpen}
                    aria-controls={submenuId}
                    aria-label={`${item.label} submenu`}
                    onClick={() => setOpenKey(isOpen ? null : item.path)}
                  >
                    <span className="header__nav-caret" aria-hidden="true" />
                  </button>
                )}
              </div>
              {hasChildren && (
                <ul className="header__dropdown" id={submenuId}>
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <NavLink
                        to={child.path}
                        end
                        className={() =>
                          isChildActive(child.path, location)
                            ? 'header__dropdown-link is-active'
                            : 'header__dropdown-link'
                        }
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function Layout() {
  const [hiringDismissed, setHiringDismissed] = useState(false)
  const [headerSolid, setHeaderSolid] = useState(false)
  const headerRef = useRef(null)
  const layoutRef = useRef(null)
  const location = useLocation()
  const heroHeader = HERO_HEADER_PATHS.includes(location.pathname)

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!heroHeader) {
      setHeaderSolid(true)
      return
    }

    const onScroll = () => setHeaderSolid(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [heroHeader, location.pathname])

  useEffect(() => {
    const header = headerRef.current
    const layout = layoutRef.current
    if (!header || !layout || !heroHeader) return

    const sync = () => {
      layout.style.setProperty('--header-h', `${header.offsetHeight}px`)
    }
    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(header)
    return () => {
      ro.disconnect()
      layout.style.removeProperty('--header-h')
    }
  }, [heroHeader, hiringDismissed])

  return (
    <div
      ref={layoutRef}
      className={[
        'layout',
        heroHeader ? 'layout--hero-header' : '',
        hiringDismissed ? 'layout--banner-off' : '',
      ].filter(Boolean).join(' ')}
    >
      {!hiringDismissed && (
        <div className="hiring-banner">
          <span className="hiring-banner__text">
            Now Hiring — Direct Service Providers.{' '}
            <Link to="/careers" className="hiring-banner__link">Apply Today &rarr;</Link>
          </span>
          <button
            className="hiring-banner__close"
            onClick={() => setHiringDismissed(true)}
            aria-label="Dismiss banner"
          >
            &times;
          </button>
        </div>
      )}

      <header ref={headerRef} className={headerSolid ? 'header is-solid' : 'header'}>
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <span className="header__logo-mark" aria-hidden="true" />
            <span className="header__logo-text">Good Shepherd Manor</span>
          </Link>
          <HeaderNav />
          <Link to="/ways-to-give" className="header__donate">
            Donate
          </Link>
        </div>
      </header>

      <main className="layout__main">
        <Outlet />
      </main>

      <section className="signup-band" aria-labelledby="signup-band-heading">
        <div className="signup-band__inner">
          <div className="signup-band__copy">
            <h2 id="signup-band-heading">Newsletter</h2>
            <p>Sign up for updates and stories from GSM.</p>
          </div>
          <form
            className="signup-band__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="signup-email">Email address</label>
            <div className="signup-band__row">
              <input
                id="signup-email"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
              <button type="submit" className="signup-band__btn">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-mark" aria-hidden="true" />
              <span className="footer__logo-text">Good Shepherd Manor</span>
            </Link>
            <p className="footer__tagline">
              A community of care, growth, and dignity for over 50 years.
            </p>
          </div>

          <nav className="footer__nav" aria-label="About">
            <h3 className="footer__heading">About Us</h3>
            <ul className="footer__links">
              {FOOTER_ABOUT.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__nav" aria-label="Ways to give">
            <h3 className="footer__heading">Ways To Give</h3>
            <ul className="footer__links">
              {FOOTER_GIVE.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact-col">
            <h3 className="footer__heading">Contact Info</h3>
            <p className="footer__contact">(815) 472-3700</p>
            <p className="footer__contact">P.O. Box 260</p>
            <p className="footer__contact">4129 N. State Route 1-17</p>
            <p className="footer__contact">Momence, IL 60954</p>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <p className="footer__copy">
              &copy; 2026 The Good Shepherd Manor. All rights reserved.{' '}
              <Link to="/privacy">Privacy Policy</Link>
              {' · '}
              <Link to="/about#accessibility">Accessibility Statement</Link>
            </p>
            <ul className="footer__socials">
              {FOOTER_SOCIALS.map((item) => (
                <li key={item.name}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="footer__social"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        width={18}
                        height={18}
                        className="footer__social-icon"
                      />
                    </a>
                  ) : (
                    <span className="footer__social" aria-hidden="true">
                      <img
                        src={item.icon}
                        alt=""
                        width={18}
                        height={18}
                        className="footer__social-icon"
                      />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
