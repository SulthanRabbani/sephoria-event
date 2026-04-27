import type { ChronologieLandingData } from '@/types/chronologie'

export const chronologieHome: ChronologieLandingData = {
  brand: 'Chronologie',
  navigation: [
    { label: 'HOME', href: '#top' },
    { label: 'COLLECTION', href: '#story' },
    { label: 'JOURNAL', href: '#story' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ],
  headerAction: { label: 'VISIT THE STORE', href: '#boutique' },
  intro: {
    eyebrow: 'ABOUT CHRONOLOGIE',
    title: 'A house built on patience, provenance, and quiet conviction.',
    description:
      'Chronologie is a quiet destination for collectors seeking rare watches, considered guidance, and an experience rooted in trust. We work slowly, favouring discernment over spectacle and long-term relationships over transactions.',
  },
  boutique: {
    overline: 'THE BOUTIQUE',
    title: 'A calm space for considered collecting in the heart of Jakarta.',
    description:
      'Our salon is designed for unhurried conversations, close inspection, and the sort of private viewings that let a timepiece reveal itself properly.',
    detail:
      'Warm stone, muted oak, and soft shadows frame a setting where provenance and condition take precedence over noise.',
  },
  story: {
    eyebrow: 'OUR STORY',
    title: 'We began with a belief that timepieces deserve context, not just commerce.',
    paragraphs: [
      'Chronologie was founded to create a different pace of luxury retail — one where expertise feels personal, acquisition feels intentional, and every recommendation is shaped by the life a watch will eventually live on the wrist.',
      'From first conversation to aftercare, we emphasise authenticity, rarity, condition, and fit. The result is a boutique experience that values confidence, discretion, and memory over urgency.',
    ],
  },
  values: {
    eyebrow: 'OUR POINT OF VIEW',
    vision: {
      title: 'Vision',
      description:
        'To be the most trusted modern watch house for collectors who value provenance, restraint, and quietly exceptional service.',
    },
    mission: {
      title: 'Mission',
      description:
        'To curate remarkable timepieces, explain them with clarity, and support every client long after the first appointment has ended.',
    },
  },
  service: {
    eyebrow: 'THE SERVICE',
    title: 'Guidance shaped by connoisseurship, delivered with warmth.',
    description:
      'Whether you are beginning a collection or searching for a precise reference, our service is structured to feel personal, discreet, and deeply informed.',
    action: { label: 'VISIT THE STORE', href: '#contact' },
    items: [
      {
        title: 'Personal Sourcing',
        description: 'Targeted search support for rare references, collector briefs, and quietly sought-after pieces.',
      },
      {
        title: 'Full Authentication',
        description: 'Detailed review of provenance, movement, case, dial, and supporting documentation before presentation.',
      },
      {
        title: 'Private Viewings',
        description: 'One-to-one appointments designed for comparison, conversation, and time on the wrist.',
      },
      {
        title: 'Aftercare',
        description: 'Support with ownership guidance, maintenance referrals, and collector continuity after purchase.',
      },
    ],
    notes: [
      { label: 'By appointment', value: 'Quiet consultations in a private boutique setting.' },
      { label: 'Collector-led', value: 'Recommendations grounded in taste, proportion, and provenance.' },
      { label: 'Long-term care', value: 'A relationship that continues well beyond acquisition.' },
    ],
  },
  footer: {
    description: 'A refined house for collectors seeking trusted curation, private viewings, and enduring mechanical beauty.',
    columns: [
      {
        title: 'BOUTIQUE',
        items: [
          { label: 'Plaza Indonesia, Level 3', href: '#boutique' },
          { label: 'Jl. M.H. Thamrin Kav. 28–30', href: '#boutique' },
          { label: 'Jakarta Pusat 10350', href: '#boutique' },
          { label: 'Indonesia', href: '#boutique' },
        ],
      },
      {
        title: 'CONTACT',
        items: [
          { label: '+62 813 3366 7890', href: 'tel:+6281333667890' },
          { label: 'concierge@chronologie.id', href: 'mailto:concierge@chronologie.id' },
        ],
      },
      {
        title: 'HOURS',
        items: [
          { label: 'Mon — Sat', href: '#contact' },
          { label: '10:30 — 20:30', href: '#contact' },
          { label: 'Private appointments available', href: '#contact' },
        ],
      },
    ],
    legalLeft: '© 2026 Chronologie. All rights reserved.',
    legalRight: 'Curated timepieces, quietly presented.',
  },
}
