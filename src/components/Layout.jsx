import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './Layout.css'

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Support GSM', path: '/support-gsm' },
  { label: 'News', path: '/news' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

function Layout() {
  const [hiringDismissed, setHiringDismissed] = useState(false)
  const location = useLocation()

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

  return (
    <div className="layout">
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

      <header className="header">
        <div className="header__inner">
          <Link to="/" className="header__logo">
            <span className="header__logo-icon">&#9878;</span>
            <span className="header__logo-text">Good Shepherd Manor</span>
          </Link>
          <nav className="header__nav">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="header__nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
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
