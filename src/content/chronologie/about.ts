export const chronologieAboutPage = {
  navigation: [
    { label: 'HOME', href: '/' },
    { label: 'COLLECTION', href: '/collection' },
    { label: 'JOURNAL', href: '/journal' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
  ],
  headerAction: { label: 'VISIT THE STORE', href: '/contact' },
  hero: {
    eyebrow: 'ABOUT CHRONOLOGIE',
    title: 'A house built on patience, provenance, and quiet conviction.',
    description:
      'Chronologie was founded in Jakarta as a destination for collectors who value the conversation as much as the acquisition. We are not a shop. We are an atelier.',
  },
  showroomImage: {
    src: '/chronologie/renders/about-showroom.png',
    alt: 'Chronologie showroom interior',
  },
  story: {
    title: 'Our Story',
    paragraphs: [
      'Chronologie was born from a single belief: that the right timepiece, presented in the right way, at the right moment, becomes an heirloom before it ever leaves the boutique.',
      'For over a decade, our specialists have travelled, studied, and connected with the most respected workshops, collectors, and dealers across Europe and Asia. We bring back only what we would wear ourselves.',
      'Today, our Jakarta atelier serves a small community of clients who return not for inventory, but for the relationship.',
    ],
  },
  values: [
    {
      label: 'VISION',
      title: "To be Indonesia's most considered destination for fine timepieces.",
      description:
        'Not the largest. Not the loudest. The most considered. We measure ourselves by the depth of our client relationships and the integrity of our collection.',
    },
    {
      label: 'MISSION',
      title: 'To curate, authenticate, and present timepieces with absolute integrity.',
      description:
        'Every watch in our care is sourced personally, authenticated by our specialists, and presented with full provenance. There are no surprises — only stories.',
    },
  ],
  service: {
    label: 'THE SERVICE',
    title: 'An expertise quietly given.',
    image: {
      src: '/chronologie/renders/about-service.png',
      alt: 'Watch specialist handling a timepiece movement',
    },
    items: [
      {
        title: 'Personal Sourcing',
        description: 'We locate specific references on behalf of clients — discreetly, globally.',
      },
      {
        title: 'Full Authentication',
        description: 'Every piece is examined by our master watchmakers before it enters the collection.',
      },
      {
        title: 'Private Viewings',
        description: 'By appointment only. Tea, time, and zero pressure.',
      },
      {
        title: 'Aftercare',
        description: 'Servicing, restoration, and lifelong stewardship of every watch we sell.',
      },
    ],
  },
} as const
