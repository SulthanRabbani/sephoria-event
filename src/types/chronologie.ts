export type NavLink = {
  label: string
  href: string
}

export type ActionLink = {
  label: string
  href: string
}

export type InfoItem = {
  label: string
  value: string
}

export type ServiceItem = {
  title: string
  description: string
}

export type FooterColumn = {
  title: string
  items: ActionLink[]
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
  image?: string
}

export type ArticleCardTone = 'vintage' | 'craft' | 'modern'

export type ArticleCard = {
  category: string
  date: string
  title: string
  excerpt: string
  href: string
  tone: ArticleCardTone
  image?: string
}

export type ChronologieLandingData = {
  brand: string
  navigation: NavLink[]
  headerAction: ActionLink
  intro: {
    eyebrow: string
    title: string
    description: string
  }
  boutique: {
    overline: string
    title: string
    description: string
    detail: string
  }
  story: {
    eyebrow: string
    title: string
    paragraphs: string[]
  }
  values: {
    eyebrow: string
    vision: {
      title: string
      description: string
    }
    mission: {
      title: string
      description: string
    }
  }
  service: {
    eyebrow: string
    title: string
    description: string
    action: ActionLink
    items: ServiceItem[]
    notes: InfoItem[]
  }
  footer: {
    description: string
    columns: FooterColumn[]
    legalLeft: string
    legalRight: string
  }

  hero?: {
    title: string
    description: string
    image?: string
    primaryAction: ActionLink
    secondaryAction: ActionLink
  }
  collection?: {
    eyebrow: string
    title: string
    description: string
    categories: string[]
    items: WatchCard[]
    action: ActionLink
  }
  craft?: {
    eyebrow: string
    title: string
    description: string
    image?: string
    action: ActionLink
  }
  invitation?: {
    eyebrow: string
    title: string
    description: string
    image?: string
    action: ActionLink
  }
  journal?: {
    eyebrow: string
    title: string
    description: string
    featured: ArticleCard
    secondary: ArticleCard[]
  }
  contactCta?: {
    title: string
    description: string
    primaryAction: ActionLink
    secondaryAction: ActionLink
  }
}
