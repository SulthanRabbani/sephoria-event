import type { Metadata } from 'next'
import { CatalogueClient } from './CatalogueClient'

export const metadata: Metadata = {
  title: 'Catalogue — CHRONOLOGIE',
  description:
    'Explore our curated selection of luxury timepieces from the world\'s finest watchmakers. New and pre-owned Rolex, Patek Philippe, Audemars Piguet, and more.',
}

export default function CataloguePage() {
  return <CatalogueClient />
}
