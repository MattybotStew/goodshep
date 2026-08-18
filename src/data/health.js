import {
  LOREM,
  LOREM_EXTRA,
  LOREM_LONG,
  LOREM_SHORT,
  LOREM_XL,
  LOREM_XXL,
} from './placeholders'

export const healthData = {
  name: 'Health & Well Being',
  tagline: LOREM_SHORT,
  overview: {
    blocks: [
      { type: 'p', text: LOREM_XXL },
      { type: 'p', text: LOREM_XL },
      { type: 'h3', text: 'Care on campus' },
      { type: 'p', text: LOREM_LONG },
      {
        type: 'ul',
        items: [
          'Nursing Services — 24-hour support on campus.',
          'On-site Clinic — scheduled and walk-in care.',
          'Pharmacy Services — medications managed on site.',
          'Community Supports — help beyond the campus gates.',
          'Transportation Assistance — rides to appointments and activities.',
        ],
      },
      { type: 'p', text: LOREM_XL },
    ],
  },
  sections: [
    {
      id: 'nursing',
      title: 'Nursing Services',
      blocks: [
        { type: 'p', text: LOREM_XXL },
        {
          type: 'quote',
          text: LOREM_LONG,
          cite: 'Placeholder quote',
        },
        { type: 'p', text: LOREM_XL },
        {
          type: 'ul',
          items: [LOREM_SHORT, LOREM, LOREM_EXTRA],
        },
        { type: 'p', text: LOREM_LONG },
      ],
    },
    {
      id: 'clinic',
      title: 'On-site Clinic',
      blocks: [
        { type: 'p', text: LOREM_XXL },
        { type: 'h3', text: 'What a visit looks like' },
        { type: 'p', text: LOREM_LONG },
        {
          type: 'ol',
          items: [
            LOREM_SHORT,
            LOREM,
            LOREM_EXTRA,
            'Nam libero tempore, cum soluta nobis est eligendi optio cumque.',
          ],
        },
        { type: 'p', text: LOREM_XL },
      ],
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy Services',
      blocks: [
        { type: 'p', text: LOREM_XL },
        {
          type: 'figure',
          caption: 'Placeholder photo — on-site pharmacy and medication support.',
        },
        { type: 'p', text: LOREM_XXL },
        { type: 'p', text: LOREM_LONG },
      ],
    },
    {
      id: 'supports',
      title: 'Community Supports',
      blocks: [
        { type: 'p', text: LOREM_XXL },
        { type: 'h3', text: 'In the community' },
        { type: 'p', text: LOREM_XL },
        { type: 'h3', text: 'With families' },
        { type: 'p', text: LOREM_LONG },
        {
          type: 'ul',
          items: [LOREM, LOREM_SHORT, LOREM_EXTRA],
        },
      ],
    },
    {
      id: 'transportation',
      title: 'Transportation Assistance',
      blocks: [
        { type: 'p', text: LOREM_XXL },
        {
          type: 'callout',
          title: 'Appointments',
          text: LOREM,
        },
        { type: 'p', text: LOREM_XL },
        {
          type: 'link',
          to: '/contact',
          label: 'Ask about transportation',
        },
      ],
    },
  ],
}
