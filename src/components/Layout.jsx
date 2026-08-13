import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { HERO_HEADER_PATHS, NAV_ITEMS, isChildActive, isNavItemActive } from '../data/header'
import './Layout.css'

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

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__col">
            <h3 className="footer__heading">Good Shepherd Manor</h3>
            <p className="footer__contact">(815) 472-3700</p>
            <p className="footer__contact">P.O. Box 260</p>
            <p className="footer__contact">4129 N. State Route 1-17</p>
            <p className="footer__contact">Momence, IL 60954</p>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/support-gsm">Support GSM</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Newsletter</h3>
            <p className="footer__newsletter-text">Sign up for updates and stories from GSM.</p>
            <form className="footer__newsletter" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="visually-hidden">Email address</label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Email address"
                className="footer__newsletter-input"
                autoComplete="email"
              />
              <button type="submit" className="footer__newsletter-btn">Sign Up</button>
            </form>
            <a href="https://www.facebook.com" className="footer__social" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <div className="footer__utility">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/about#accessibility">Accessibility Statement</Link>
              <Link to="/sitemap">Sitemap (prototype)</Link>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2026 The Good Shepherd Manor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
