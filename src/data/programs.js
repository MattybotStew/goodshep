const sharedCta = {
  question: 'Want to learn more about this program?',
  primary: { label: 'Contact Us', path: '/contact' },
  secondary: { label: 'Schedule a Visit', path: '/contact#visit' },
}

export const communityDay = {
  name: 'Community Day Services',
  tagline:
    'Classrooms, activities, and our Digital Den — a structured day that builds skills and belonging.',
  overview: {
    imagePosition: 'right',
    paragraphs: [
      'Community Day Services gives the men of Good Shepherd Manor a purposeful weekday: classrooms, recreation, and skill-building in a familiar setting.',
      'The program is built around each person’s abilities and interests, from daily living skills to the Digital Den technology classroom.',
    ],
    bullets: [
      'Weekday classrooms and group activities',
      'Digital Den technology lab',
      'Recreation and community outings',
      'Individualized skill-building plans',
    ],
  },
  features: [
    { icon: '▣', title: 'Classrooms', desc: 'Structured learning in small groups.' },
    { icon: '◆', title: 'Digital Den', desc: 'Computers, literacy, and enrichment.' },
    { icon: '○', title: 'Activities', desc: 'Recreation, art, and community trips.' },
    { icon: '＋', title: 'Support', desc: 'Staff who know each man by name.' },
  ],
  sections: [
    {
      id: 'digital-den',
      title: 'Digital Den',
      imagePosition: 'right',
      paragraphs: [
        'The Digital Den is our technology classroom. Residents learn computer skills, digital literacy, and creative tools in a space designed for them — not adapted from a typical lab.',
      ],
      bullets: [
        'Introductory computer skills',
        'Communication and media tools',
        'Small-group instruction',
      ],
    },
  ],
  cta: sharedCta,
  related: [
    { name: 'Vocational Program', desc: 'Meaningful work and skill-building.', path: '/programs/vocational' },
    { name: 'Residential Living', desc: 'Well-maintained homes with 24/7 care.', path: '/programs/residential-living' },
    { name: 'Health & Well Being', desc: 'On-site nursing, clinic, and pharmacy.', path: '/programs/health-well-being' },
  ],
}

export const vocational = {
  name: 'Vocational Program',
  tagline: 'Meaningful work that builds confidence, routine, and independence.',
  overview: {
    imagePosition: 'right',
    paragraphs: [
      'The Vocational Program offers paid and supported work opportunities for men who are ready to contribute in a structured setting.',
      'Details of current work sites and partnerships are being confirmed with the client (TBD). The page stays in the 15-page sitemap so the route is stable.',
    ],
    bullets: [
      'Supported work opportunities',
      'Skill-building and job coaching',
      'Partnerships with local employers (TBD)',
    ],
  },
  features: [
    { icon: '▣', title: 'Work', desc: 'Real tasks with real support.' },
    { icon: '◆', title: 'Coaching', desc: 'Staff alongside every shift.' },
    { icon: '○', title: 'Routine', desc: 'A dependable weekday structure.' },
    { icon: '＋', title: 'Pride', desc: 'Work that is visible and valued.' },
  ],
  sections: [],
  cta: sharedCta,
  related: [
    { name: 'Community Day Services', desc: 'Classrooms, activities, and our Digital Den.', path: '/programs/community-day-services' },
    { name: 'Residential Living', desc: 'Well-maintained homes with 24/7 care.', path: '/programs/residential-living' },
    { name: 'Health & Well Being', desc: 'On-site nursing, clinic, and pharmacy.', path: '/programs/health-well-being' },
  ],
}

export const residential = {
  name: 'Residential Living',
  tagline: 'Well-maintained homes with 24/7 compassionate care and support.',
  overview: {
    imagePosition: 'right',
    paragraphs: [
      'Good Shepherd Manor is home. Residents live in well-maintained houses on our Momence campus with staff present around the clock.',
      'The goal is a stable, familiar household — not an institution — where each man is known and supported.',
    ],
    bullets: [
      'On-campus homes',
      '24/7 Direct Service Provider support',
      'Daily living assistance',
      'A community, not a facility',
    ],
  },
  features: [
    { icon: '▣', title: 'Homes', desc: 'Houses designed for daily life.' },
    { icon: '◆', title: '24/7 staff', desc: 'Support through every shift.' },
    { icon: '○', title: 'Campus', desc: 'Day programs a short walk away.' },
    { icon: '＋', title: 'Belonging', desc: 'Neighbors, routines, and friends.' },
  ],
  sections: [],
  cta: sharedCta,
  related: [
    { name: 'Community Day Services', desc: 'Classrooms, activities, and our Digital Den.', path: '/programs/community-day-services' },
    { name: 'Vocational Program', desc: 'Meaningful work and skill-building.', path: '/programs/vocational' },
    { name: 'Health & Well Being', desc: 'On-site nursing, clinic, and pharmacy.', path: '/programs/health-well-being' },
  ],
}