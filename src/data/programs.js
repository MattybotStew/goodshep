const loremLong =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const loremShort =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const bullets = [
  'Lorem ipsum dolor sit amet',
  'Consectetur adipiscing elit',
  'Sed do eiusmod tempor incididunt',
  'Ut labore et dolore magna aliqua',
]

export const communityDay = {
  name: 'Community Day Services',
  tagline: loremShort,
  overview: {
    imagePosition: 'right',
    paragraphs: [loremLong, loremShort],
    bullets: bullets,
  },
  sections: [
    {
      id: 'digital-den',
      title: 'Digital Den',
      imagePosition: 'right',
      paragraphs: [loremLong],
      bullets: [bullets[0], bullets[1], bullets[2]],
    },
  ],
}

export const vocational = {
  name: 'Vocational Program',
  tagline: loremShort,
  overview: {
    imagePosition: 'right',
    paragraphs: [loremLong, loremShort],
    bullets: bullets,
  },
  sections: [],
}

export const residential = {
  name: 'Residential Living',
  tagline: loremShort,
  overview: {
    imagePosition: 'right',
    paragraphs: [loremLong, loremShort],
    bullets: bullets,
  },
  sections: [],
}
