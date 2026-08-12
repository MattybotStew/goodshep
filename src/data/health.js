export const healthData = {
  name: 'Health & Well Being',
  tagline:
    'Comprehensive on-site health services that keep our residents healthy, safe, and connected to the care they need.',
  overview: {
    imagePosition: 'right',
    paragraphs: [
      'The Health & Well Being program at Good Shepherd Manor provides a full spectrum of medical care and health support services designed specifically for men with intellectual and developmental disabilities. Our dedicated nursing staff and on-site clinic ensure that residents receive consistent, personalized care in a familiar and comfortable environment.',
      'From routine health monitoring to coordination with specialists and community providers, we are committed to maintaining and improving the physical and emotional well-being of every man we serve.',
    ],
    bullets: [
      '24/7 on-site nursing care',
      'On-site clinic for routine medical needs',
      'Pharmacy coordination and medication management',
      'Transportation to and from medical appointments',
    ],
  },
  features: [
    { icon: '\u2695', title: '24/7 Nursing', desc: 'Round-the-clock professional nursing care on site.' },
    { icon: '\u271A', title: 'On-site Clinic', desc: 'Routine medical care without leaving home.' },
    { icon: '\u2697', title: 'Pharmacy', desc: 'Coordinated medication management and refills.' },
    { icon: '\u27BF', title: 'Transportation', desc: 'Rides to and from all medical appointments.' },
  ],
  sections: [
    {
      id: 'nursing',
      title: 'Nursing Services',
      imagePosition: 'right',
      paragraphs: [
        'Our licensed nursing staff is on-site around the clock to provide skilled nursing care, health monitoring, and emergency response. Each resident has an individualized care plan reviewed regularly by our nursing team.',
      ],
      bullets: [
        'Medication administration and monitoring',
        'Regular health assessments and vital sign checks',
        'Wound care and chronic condition management',
        'Emergency response and coordination with 911',
      ],
    },
    {
      id: 'clinic',
      title: 'On-site Clinic',
      imagePosition: 'left',
      paragraphs: [
        'Our on-site clinic brings primary care directly to our residents, reducing the need for stressful off-site visits for routine medical needs. The clinic is staffed on scheduled days with visiting physicians and nurse practitioners.',
      ],
      bullets: [
        'Routine physicals and health screenings',
        'Vaccinations and flu shots',
        'Lab work and diagnostic coordination',
        'Specialist referrals when needed',
      ],
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy Services',
      imagePosition: 'right',
      paragraphs: [
        'We coordinate with local pharmacies to manage prescriptions, refills, and medication delivery. Our nursing staff oversees medication administration to ensure safety and adherence.',
      ],
    },
    {
      id: 'supports',
      title: 'Community Supports',
      imagePosition: 'left',
      paragraphs: [
        'We connect residents with community health resources, specialists, and support services beyond what we provide on-site. This includes coordination with state agencies, disability service providers, and mental health professionals.',
      ],
    },
    {
      id: 'transportation',
      title: 'Transportation Assistance',
      imagePosition: 'right',
      paragraphs: [
        'Scheduling and transportation for doctor visits, specialist appointments, and hospital visits is coordinated by our staff. We ensure every resident gets to their appointments safely and on time.',
      ],
    },
  ],
  cta: {
    question: 'Want to learn more about our Health & Well Being services?',
    primary: { label: 'Contact Us', path: '/contact' },
    secondary: { label: 'Schedule a Visit', path: '/contact#visit' },
  },
  related: [
    { name: 'Community Day Services', desc: 'Classrooms, activities, and our Digital Den.', path: '/programs/community-day-services' },
    { name: 'Residential Living', desc: 'Well-maintained homes with 24/7 care.', path: '/programs/residential-living' },
    { name: 'Vocational Program', desc: 'Meaningful work and skill-building.', path: '/programs/vocational' },
  ],
}
