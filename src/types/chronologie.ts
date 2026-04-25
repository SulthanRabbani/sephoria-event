export type NavLink = {
  label: string
  href: string
}

export type ActionLink = {
  label: string
  href: string
}

export type WatchCardTone = 'charcoal' | 'gold' | 'sand' | 'ivory' | 'steel'
export type WatchCardSize = 'hero' | 'tall' | 'wide' | 'regular'

export type WatchCard = {
  brand: string
  name: string
  summary: string
  cta: string
  tone: WatchCardTone
  size: WatchCardSize
}

export type ArticleCardTone = 'vintage' | 'craft' | 'modern'

export type ArticleCard = {
  category: string
  date: string
  title: string
  excerpt: string
  href: string
  tone: ArticleCardTone
}

export type FooterColumn = {
  title: string
  items: ActionLink[]
}

export type ChronologieLandingData = {
  brand: string
  navigation: NavLink[]
  headerAction: ActionLink
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryAction: ActionLink
    secondaryAction: ActionLink
  }
  collection: {
    eyebrow: string
    title: string
    description: string
    categories: string[]
    items: WatchCard[]
    action: ActionLink
  }
  craft: {
    eyebrow: string
    title: string
    description: string
    action: ActionLink
  }
  invitation: {
    eyebrow: string
    title: string
    description: string
    action: ActionLink
  }
  journal: {
    eyebrow: string
    title: string
    description: string
    featured: ArticleCard
    secondary: ArticleCard[]
  }
  contactCta: {
    title: string
    description: string
    primaryAction: ActionLink
    secondaryAction: ActionLink
  }
  footer: {
    description: string
    columns: FooterColumn[]
    socials: ActionLink[]
    legalLeft: string
    legalRight: string
  }
}
