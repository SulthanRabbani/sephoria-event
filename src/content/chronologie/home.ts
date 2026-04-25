import type { ChronologieLandingData } from '@/types/chronologie'

export const chronologieHome: ChronologieLandingData = {
  brand: 'Chronologie',
  navigation: [
    { label: 'HOME', href: '#top' },
    { label: 'COLLECTION', href: '#collection' },
    { label: 'JOURNAL', href: '#journal' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact-cta' },
  ],
  headerAction: { label: 'VISIT THE STORE', href: '#boutique' },
  hero: {
    eyebrow: 'THE COLLECTION',
    title: 'Time, considered with intention.',
    description:
      'A small, deliberate selection of timepieces, sourced for collectors who value provenance, proportion, and the quiet pleasure of mechanical detail.',
    primaryAction: { label: 'SHOP COLLECTION', href: '#collection' },
    secondaryAction: { label: 'BOOK APPOINTMENT', href: '#boutique' },
  },
  collection: {
    eyebrow: 'CURATED SELECTION',
    title: 'A curated selection of exceptional timepieces',
    description:
      'From restrained divers to elegant dress references, each piece is chosen for its enduring presence and the story it carries on the wrist.',
    categories: ['ALL PIECES', 'DIVING INSTRUMENTS', 'DRESS TIMEPIECES', 'CHRONOGRAPHS'],
    action: { label: 'VIEW ALL TIMEPIECES', href: '#contact-cta' },
    items: [
      {
        brand: 'ROLEX',
        name: 'Submariner No-Date',
        summary: 'A study in restraint and precision, rendered in deep charcoal and brushed steel.',
        cta: 'INQUIRE VIA WHATSAPP',
        tone: 'charcoal',
        size: 'hero',
      },
      {
        brand: 'ROLEX',
        name: 'Cosmograph Daytona',
        summary: 'Warm gold tones and a poised silhouette for the collector who prefers quiet drama.',
        cta: 'INQUIRE',
        tone: 'gold',
        size: 'tall',
      },
      {
        brand: 'PATEK PHILIPPE',
        name: 'Heritage Chronograph',
        summary: 'Soft sepia leather, balanced subdials, and an unmistakably formal rhythm.',
        cta: 'INQUIRE',
        tone: 'sand',
        size: 'wide',
      },
      {
        brand: 'PATEK PHILIPPE',
        name: 'Calatrava Ultra-Thin',
        summary: 'Minimal, dress-led, and composed with a near weightless sense of proportion.',
        cta: 'INQUIRE',
        tone: 'ivory',
        size: 'tall',
      },
      {
        brand: 'AUDEMARS PIGUET',
        name: 'Royal Oak Jumbo',
        summary: 'Angular steel surfaces meeting a dark tapisserie-like dial treatment.',
        cta: 'INQUIRE',
        tone: 'steel',
        size: 'regular',
      },
      {
        brand: 'ROLEX',
        name: 'Datejust 36',
        summary: 'Classic two-tone warmth with a bright dial and fluted refinement.',
        cta: 'INQUIRE',
        tone: 'gold',
        size: 'regular',
      },
      {
        brand: 'IWC SCHAFFHAUSEN',
        name: 'Portugieser Automatic',
        summary: 'A broad white dial and dark strap, built for collectors who prefer measured elegance.',
        cta: 'INQUIRE',
        tone: 'ivory',
        size: 'wide',
      },
    ],
  },
  craft: {
    eyebrow: 'THE ATELIER',
    title: 'We do not sell watches. We curate them.',
    description:
      'Every arrival is selected slowly, examined thoroughly, and presented with the same care a collector brings to a piece they intend to keep. Provenance, authenticity, condition, and emotional resonance all matter equally here.',
    action: { label: 'OUR STORY', href: '#journal' },
  },
  invitation: {
    eyebrow: 'PRIVATE APPOINTMENTS',
    title: 'An invitation to spend time with time.',
    description:
      'Visit the salon for private viewings, guided comparisons, and unhurried conversations around pieces worth wearing for decades.',
    action: { label: 'BOOK AN APPOINTMENT', href: '#contact-cta' },
  },
  journal: {
    eyebrow: 'THE JOURNAL',
    title: 'Insights on time, craftsmanship, and collecting',
    description:
      'Editorial notes from the atelier, shaped by observation, restoration, and the collectors who continue to return for conversation.',
    featured: {
      category: 'COLLECTING',
      date: 'APRIL 21, 2026',
      title: 'The Art of Collecting Vintage Rolex',
      excerpt: 'Understanding the value beyond time: what makes a vintage Rolex more than just a watch.',
      href: '#contact-cta',
      tone: 'vintage',
    },
    secondary: [
      {
        category: 'CRAFTSMANSHIP',
        date: 'APRIL 18, 2026',
        title: 'Inside Patek Philippe Craftsmanship',
        excerpt: 'A legacy of precision passed down through generations, observed in every polished bridge and bevel.',
        href: '#contact-cta',
        tone: 'craft',
      },
      {
        category: 'PERSPECTIVE',
        date: 'APRIL 15, 2026',
        title: 'What Defines a Modern Luxury Watch',
        excerpt: 'Beyond aesthetics: the engineering, proportions, and heritage that shape a modern icon.',
        href: '#contact-cta',
        tone: 'modern',
      },
    ],
  },
  contactCta: {
    title: 'Begin a quiet conversation.',
    description: 'Our specialists are here to help you find the right timepiece, source a reference, or arrange a private viewing in Jakarta.',
    primaryAction: { label: 'INQUIRE VIA WHATSAPP', href: 'https://wa.me/6281234567890' },
    secondaryAction: { label: 'VISIT THE BOUTIQUE', href: '#boutique' },
  },
  footer: {
    description: 'A curated atelier of fine timepieces. By appointment, by passion, by tradition.',
    columns: [
      {
        title: 'DISCOVER',
        items: [
          { label: 'Collection', href: '#collection' },
          { label: 'Maisons', href: '#collection' },
          { label: 'Journal', href: '#journal' },
          { label: 'About', href: '#about' },
        ],
      },
      {
        title: 'BOUTIQUE',
        items: [
          { label: 'Plaza Indonesia, Level 2', href: '#boutique' },
          { label: 'Jl. M.H. Thamrin Kav. 28-30', href: '#boutique' },
          { label: 'Jakarta Pusat 10350', href: '#boutique' },
          { label: 'Indonesia', href: '#boutique' },
        ],
      },
      {
        title: 'CONTACT',
        items: [
          { label: '+62 812 3456 7890', href: 'tel:+6281234567890' },
          { label: 'concierge@chronologie.id', href: 'mailto:concierge@chronologie.id' },
        ],
      },
    ],
    socials: [
      { label: 'IG', href: 'https://instagram.com' },
      { label: 'FB', href: 'https://facebook.com' },
    ],
    legalLeft: '© 2026 Chronologie. All rights reserved.',
    legalRight: 'AUTHORISED PRE-OWNED SPECIALISTS',
  },
}
