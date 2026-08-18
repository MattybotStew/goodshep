/** Pages that use the transparent → white header. Add slugs to reuse it. */
export const HERO_HEADER_PATHS = ['/']

/**
 * Header nav — 6 items from AGENTS.md / SitemapPage.jsx.
 * Children are locked pages or documented About section hashes. Do not invent slugs.
 */
export const NAV_ITEMS = [
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Our History', path: '/about#history' },
      { label: 'Mission, Vision & Values', path: '/about#mission' },
      { label: 'Affiliations', path: '/about#affiliations' },
      { label: 'Accessibility', path: '/about#accessibility' },
    ],
  },
  {
    label: 'Programs & Services',
    path: '/programs',
    children: [
      { label: 'Programs & Services', path: '/programs' },
      { label: 'Community Day Services', path: '/programs/community-day-services' },
      { label: 'Vocational Program', path: '/programs/vocational' },
      { label: 'Residential Living', path: '/programs/residential-living' },
      { label: 'Health & Well Being', path: '/programs/health-well-being' },
    ],
  },
  {
    label: 'Get Involved',
    path: '/support-gsm',
    children: [
      { label: 'GSM Foundation', path: '/support-gsm' },
      { label: 'Ways to Give', path: '/ways-to-give' },
      { label: 'Shepherd Endowment Society', path: '/shepherd-endowment-society' },
      { label: 'Events', path: '/events' },
    ],
  },
  {
    label: 'News',
    path: '/news',
    children: [
      { label: 'News & Updates', path: '/news' },
      { label: 'Newsletters & Family Resources', path: '/newsletters' },
    ],
  },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

function splitHref(href) {
  const [pathname, hash] = href.split('#')
  return { pathname, hash: hash ? `#${hash}` : '' }
}

export function isChildActive(href, location) {
  const { pathname, hash } = splitHref(href)
  if (location.pathname !== pathname) return false
  if (hash) return location.hash === hash
  return true
}

export function isNavItemActive(item, location) {
  if (item.children?.length) {
    return item.children.some((child) => {
      const { pathname } = splitHref(child.path)
      return location.pathname === pathname
    })
  }
  return location.pathname === item.path
}
