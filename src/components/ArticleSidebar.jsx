import { Link, NavLink } from 'react-router-dom'
import { programs } from '../data/site'
import './ArticleSidebar.css'

const SERVICES = [
  { name: 'Digital Den', path: '/programs/community-day-services#digital-den' },
  { name: 'Nursing Services', path: '/programs/health-well-being#nursing' },
  { name: 'On-site Clinic', path: '/programs/health-well-being#clinic' },
  { name: 'Pharmacy Services', path: '/programs/health-well-being#pharmacy' },
  { name: 'Community Supports', path: '/programs/health-well-being#supports' },
  { name: 'Transportation Assistance', path: '/programs/health-well-being#transportation' },
]

function ArticleSidebar() {
  return (
    <aside className="article-sidebar">
      <nav aria-label="Programs and services">
        <p className="article-sidebar__label">Programs</p>
        <ul className="article-sidebar__list">
          {programs.map((p) => (
            <li key={p.path}>
              <NavLink
                to={p.path}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {p.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className="article-sidebar__label">Services</p>
        <ul className="article-sidebar__list">
          {SERVICES.map((s) => (
            <li key={s.path}>
              <Link to={s.path}>{s.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default ArticleSidebar