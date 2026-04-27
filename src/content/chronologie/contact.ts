export const chronologieContactPage = {
  navigation: [
    { label: 'HOME', href: '/' },
    { label: 'COLLECTION', href: '/collection' },
    { label: 'JOURNAL', href: '/journal' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' },
  ],
  headerAction: { label: 'VISIT THE STORE', href: '#boutique' },
  hero: {
    eyebrow: 'THE JOURNAL',
    title: 'Notes from the atelier.',
    description: 'Essays, dispatches and quiet observations on horology, craft, and the people who shape it.',
  },
  boutique: {
    label: 'Boutique',
    title: 'Plaza Indonesia',
    addressLines: ['Level 2, Unit 218', 'Jl. M.H. Thamrin Kav. 28–30', 'Jakarta Pusat 10350, Indonesia'],
  },
  hours: {
    label: 'Hours',
    rows: [
      { day: 'Monday – Friday', time: '10.00 — 21.00' },
      { day: 'Saturday – Sunday', time: '10.00 — 22.00' },
    ],
    note: 'Private viewings available outside opening hours.',
  },
  contact: {
    label: 'Contact',
    phone: { label: '+62 812 3456 7890', href: 'tel:+628****7890' },
    email: { label: 'concierge@chronologie.id', href: 'mailto:concierge@chronologie.id' },
  },
  actions: {
    primary: { label: 'INQUIRE VIA WHATSAPP', href: '/contact' },
    secondary: { label: 'GET DIRECTIONS', href: 'https://maps.google.com/?q=Plaza+Indonesia+Jakarta' },
  },
  map: {
    title: 'Chronologie boutique location map',
    src: 'https://www.google.com/maps?q=Plaza%20Indonesia%20Jakarta&z=16&output=embed',
  },
} as const
