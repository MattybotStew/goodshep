import { Link } from 'react-router-dom'

function PageHero({ crumbs = [], title, lede }) {
  return (
    <header className="page-hero">
      <div className="wrap">
        {crumbs.length > 0 && (
          <nav className="page-hero__crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                <span aria-hidden="true"> › </span>
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
      </div>
    </header>
  )
}

export default PageHero
