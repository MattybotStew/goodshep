const sharedCta = {
  question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
  primary: { label: 'Contact Us', path: '/contact' },
  secondary: { label: 'Schedule a Visit', path: '/contact#visit' },
}

const loremLong =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const loremShort =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const loremDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

const bullets = [
  'Lorem ipsum dolor sit amet',
  'Consectetur adipiscing elit',
  'Sed do eiusmod tempor incididunt',
  'Ut labore et dolore magna aliqua',
]

const feature = (icon, title) => ({ icon, title, desc: loremDesc })

const related = [
  { name: 'Vocational Program', desc: loremShort, path: '/programs/vocational' },
  { name: 'Residential Living', desc: loremShort, path: '/programs/residential-living' },
  { name: 'Health & Well Being', desc: loremShort, path: '/programs/health-well-being' },
]

export const communityDay = {
  name: 'Community Day Services',
  tagline: loremShort,
  overview: {
    imagePosition: 'right',
    paragraphs: [loremLong, loremShort],
    bullets: bullets,
  },
  features: [
    feature('▣', 'Classrooms'),
    feature('◆', 'Digital Den'),
    feature('○', 'Activities'),
    feature('＋', 'Support'),
  ],
  sections: [
    {
      id: 'digital-den',
      title: 'Digital Den',
      imagePosition: 'right',
      paragraphs: [loremLong],
      bullets: [bullets[0], bullets[1], bullets[2]],
    },
  ],
  cta: sharedCta,
  related,
}

export const vocational = {
  name: 'Vocational Program',
  tagline: loremShort,
  overview: {
    imagePosition: 'right',
    paragraphs: [loremLong, loremShort],
    bullets: bullets,
  },
  features: [
    feature('▣', 'Work'),
    feature('◆', 'Coaching'),
    feature('○', 'Routine'),
    feature('＋', 'Pride'),
  ],
  sections: [],
  cta: sharedCta,
  related,
}

export const residential = {
  name: 'Residential Living',
  tagline: loremShort,
  overview: {
    imagePosition: 'right',
    paragraphs: [loremLong, loremShort],
    bullets: bullets,
  },
  features: [
    feature('▣', 'Homes'),
    feature('◆', '24/7 staff'),
    feature('○', 'Campus'),
    feature('＋', 'Belonging'),
  ],
  sections: [],
  cta: sharedCta,
  related,
}
