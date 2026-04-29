import { existsSync } from 'node:fs'
import path from 'node:path'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AboutPage from './about/page'
import AboutNativePreviewPage from './about-native-preview/page'
import CollectionPage from './collection/page'
import ProductDetailPage from './collection/submariner-no-date/page'
import MaisonDetailPage from './maisons/aerowatch/page'
import MaisonsPage from './maisons/page'
import JournalDetailPage from './journal/the-art-of-collecting-vintage-rolex/page'
import JournalPage from './journal/page'
import ContactPage from './contact/page'


describe('Chronologie route pages', () => {
  it('keeps an about native preview route while the live about page remains render-first exact', () => {
    const previewRoutePath = path.join(process.cwd(), 'src/app/about-native-preview/page.tsx')

    expect(existsSync(previewRoutePath)).toBe(true)
  })

  it('does not keep the contact native preview route around once contact falls back to the exact render-first page', () => {
    const previewRoutePath = path.join(process.cwd(), 'src/app/contact-native-preview/page.tsx')

    expect(existsSync(previewRoutePath)).toBe(false)
  })

  it('renders the collection listing page from the Figma copy', () => {
    render(<CollectionPage />)

    expect(screen.getByRole('heading', { level: 1, name: /each piece, a story worth telling\./i })).toBeInTheDocument()
    expect(screen.getByText(/the collection/i)).toBeInTheDocument()
    expect(screen.getAllByText(/all pieces/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/diving instruments/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/dress timepieces/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/chronographs/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/submariner no-date/i)).toBeInTheDocument()
    expect(screen.getByText(/cosmograph daytona/i)).toBeInTheDocument()
    expect(screen.getByText(/calatrava ultra-thin/i)).toBeInTheDocument()
    expect(screen.getByText(/royal oak jumbo/i)).toBeInTheDocument()
    expect(screen.getByText(/datejust 36/i)).toBeInTheDocument()
    expect(screen.getByText(/portugieser automatic/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /begin a quiet conversation\./i })).toBeInTheDocument()
  })

  it('renders the product detail page with technical details and related pieces', () => {
    render(<ProductDetailPage />)

    expect(screen.getByRole('heading', { level: 1, name: /br 05 black ceramic/i })).toBeInTheDocument()
    expect(screen.getByText(/ref\. 124060/i)).toBeInTheDocument()
    expect(screen.getByText(/technical details/i)).toBeInTheDocument()
    expect(screen.getByText(/calibre br-cal\.321-1 automatic mechanical\. 54-hour power reserve\./i)).toBeInTheDocument()
    expect(screen.getByText(/you may also consider/i)).toBeInTheDocument()
    expect(screen.getByText(/br 05 skeleton black ceramic/i)).toBeInTheDocument()
  })

  it('renders the maisons index page with featured and grid maisons', () => {
    render(<MaisonsPage />)

    expect(screen.getByRole('heading', { level: 1, name: /house we have the privilege to carry\./i })).toBeInTheDocument()
    expect(screen.getByText(/from the most established genevan ateliers to independent masters/i)).toBeInTheDocument()
    expect(screen.getAllByText(/discover rolex/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/discover patek philippe/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/all maisons/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/audemars piguet/i)).toBeInTheDocument()
    expect(screen.getByText(/vacheron constantin/i)).toBeInTheDocument()
  })

  it('renders the maison detail page with filters and product pricing', () => {
    render(<MaisonDetailPage />)

    expect(screen.getByRole('heading', { level: 1, name: /aerowatch/i })).toBeInTheDocument()
    expect(screen.getByText(/aerowatch was founded in 1910/i)).toBeInTheDocument()
    expect(screen.getByText(/product filter/i)).toBeInTheDocument()
    expect(screen.getAllByText(/^reset$/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/^style$/i)).toBeInTheDocument()
    expect(screen.getByText(/dark-coloured dial/i)).toBeInTheDocument()
    expect(screen.getAllByText(/\$\s?7,975/i).length).toBeGreaterThan(0)
  })

  it('renders the journal index page with feature and secondary articles', () => {
    render(<JournalPage />)

    expect(screen.getByRole('heading', { level: 1, name: /notes from the atelier\./i })).toBeInTheDocument()
    expect(screen.getByText(/essays, dispatches and quiet observations on horology/i)).toBeInTheDocument()
    expect(screen.getByText(/the art of collecting vintage rolex/i)).toBeInTheDocument()
    expect(screen.getByText(/inside patek philippe craftsmanship/i)).toBeInTheDocument()
    expect(screen.getByText(/what defines a modern luxury watch/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /explore article/i }).length).toBeGreaterThanOrEqual(3)
  })

  it('renders the journal detail page with the full article and related stories', () => {
    render(<JournalDetailPage />)

    expect(screen.getByRole('heading', { level: 1, name: /the art of collecting vintage rolex/i })).toBeInTheDocument()
    expect(screen.getByText(/april 21, 2026 · 6 min read/i)).toBeInTheDocument()
    expect(screen.getByText(/there is a particular kind of collector we have come to admire/i)).toBeInTheDocument()
    expect(screen.getByText(/inside patek philippe craftsmanship/i)).toBeInTheDocument()
    expect(screen.getByText(/what defines a modern luxury watch/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /explore article/i }).length).toBeGreaterThan(0)
  })

  it('renders the about native preview with the same restrained centered hero, moderate showroom band, tighter editorial sections, and denser footer rhythm as the exact about render', () => {
    render(<AboutNativePreviewPage />)

    const showroomImage = screen.getByAltText(/chronologie showroom interior/i)
    const serviceImage = screen.getByAltText(/watch specialist handling a timepiece movement/i)
    expect(showroomImage).toBeInTheDocument()
    expect(serviceImage).toBeInTheDocument()

    const heroHeading = screen.getByRole('heading', { level: 1, name: /a house built on patience, provenance, and quiet conviction\./i })
    expect(heroHeading.className).toContain('font-display')
    expect(heroHeading.className).toContain('lg:text-[68px]')
    expect(heroHeading.className).toContain('max-w-[660px]')
    expect(heroHeading.parentElement?.className).toContain('items-center')
    expect(heroHeading.parentElement?.className).toContain('text-center')

    const heroDescription = screen.getByText(/chronologie was founded in jakarta as a destination for collectors/i)
    expect(heroDescription.className).toContain('max-w-[560px]')
    expect(heroDescription.className).toContain('md:text-[18px]')

    expect(showroomImage.parentElement?.className).toContain('lg:h-[410px]')
    expect(showroomImage.parentElement?.className).not.toContain('lg:h-[740px]')

    expect(screen.queryByText(/^jakarta atelier$/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/^private viewing$/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/a room for slow decisions, provenance, and private conversation\./i)).not.toBeInTheDocument()

    const storyHeading = screen.getByRole('heading', { level: 2, name: /our story/i })
    expect(storyHeading.className).toContain('lg:text-[48px]')
    const storySection = storyHeading.closest('section')
    expect(storySection?.className ?? '').toContain('lg:pb-[56px]')
    expect(storySection?.firstElementChild?.className ?? '').toContain('max-w-[1040px]')
    expect(storySection?.firstElementChild?.className ?? '').toContain('lg:grid-cols-[0.34fr_0.66fr]')
    expect(storySection?.firstElementChild?.className ?? '').toContain('lg:gap-12')

    const valuesVisionHeading = screen.getByRole('heading', {
      level: 2,
      name: /to be indonesia's most considered destination for fine timepieces\./i,
    })
    const valuesMissionHeading = screen.getByRole('heading', {
      level: 2,
      name: /to curate, authenticate, and present timepieces with absolute integrity\./i,
    })
    expect(valuesVisionHeading.className).toContain('lg:text-[36px]')
    expect(valuesMissionHeading.className).toContain('lg:text-[36px]')
    expect(valuesVisionHeading.closest('article')?.className ?? '').not.toContain('lg:col-start-8')
    expect(valuesMissionHeading.closest('article')?.className ?? '').not.toContain('lg:col-start-8')
    expect(valuesMissionHeading.closest('article')?.className ?? '').not.toContain('lg:mt-20')
    expect(valuesVisionHeading.closest('section')?.className ?? '').toContain('lg:pb-[64px]')
    expect(valuesVisionHeading.closest('section')?.firstElementChild?.className ?? '').toContain('lg:gap-12')

    const serviceHeading = screen.getByRole('heading', { level: 2, name: /an expertise quietly given\./i })
    expect(serviceHeading.className).toContain('lg:text-[40px]')
    expect(serviceHeading.closest('section')?.className ?? '').toContain('lg:pb-[60px]')
    expect(serviceHeading.closest('section')?.firstElementChild?.className ?? '').toContain('lg:grid-cols-[0.45fr_0.55fr]')
    expect(serviceHeading.closest('section')?.firstElementChild?.className ?? '').toContain('lg:gap-12')

    expect(serviceImage.parentElement?.className).toContain('aspect-[544/835]')
    expect(serviceImage.parentElement?.className ?? '').not.toContain('lg:-translate-y-10')
    expect(screen.queryByText(/handled by hand, never hurried\./i)).not.toBeInTheDocument()

    const serviceItems = screen.getAllByRole('heading', { level: 3 })
    expect(serviceItems[0].className).toContain('md:text-[20px]')
    expect(serviceItems[0].closest('article')?.className).toContain('py-[18px]')

    const aboutLinks = screen.getAllByRole('link', { name: /^about$/i })
    expect(aboutLinks.some((link) => link.getAttribute('aria-current') === 'page')).toBe(true)

    expect(screen.getByRole('link', { name: /visit the store/i })).toHaveAttribute('href', '/contact')
    expect(screen.getByText(/for over a decade, our specialists have travelled/i)).toBeInTheDocument()
    expect(screen.getByText(/every watch in our care is sourced personally/i)).toBeInTheDocument()
    expect(screen.queryByText(/visits by appointment/i)).not.toBeInTheDocument()

    const footer = screen.getByText(/a curated atelier of fine timepieces/i).closest('footer')
    expect(footer?.className).toContain('bg-[#2b2622]')
    expect(footer?.firstElementChild?.className ?? '').toContain('lg:pt-12')
    expect(footer?.firstElementChild?.className ?? '').toContain('lg:pb-6')
  })

  it('renders the about page from the exact Figma render with semantic copy and hotspot navigation', () => {
    render(<AboutPage />)

    expect(screen.getByAltText(/chronologie about page design/i)).toBeInTheDocument()
    expect(screen.queryByAltText(/chronologie showroom interior/i)).not.toBeInTheDocument()
    expect(screen.queryByAltText(/watch specialist handling a timepiece movement/i)).not.toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1, name: /a house built on patience, provenance, and quiet conviction\./i })).toBeInTheDocument()
    expect(screen.getByText(/about chronologie/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /^about$/i }).some((link) => link.getAttribute('aria-current') === 'page')).toBe(true)
    expect(screen.getByRole('heading', { level: 2, name: /our story/i })).toBeInTheDocument()
    expect(screen.getByText(/chronologie was born from a single belief/i)).toBeInTheDocument()
    expect(screen.getAllByText(/^vision$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^mission$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/the service/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/an expertise quietly given\./i)).toBeInTheDocument()
    expect(screen.getAllByText(/personal sourcing/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/full authentication/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/private viewings/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/aftercare/i).length).toBeGreaterThan(0)
  })

  it('renders the contact page with the exact Figma render, semantic boutique details, and CTA actions', () => {
    render(<ContactPage />)

    expect(screen.getAllByText(/^boutique$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/plaza indonesia/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/level 2, unit 218/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/monday – friday/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/10\.00 — 21\.00/i)).toBeInTheDocument()
    expect(screen.getByText(/private viewings available outside opening hours\./i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /^\+62 812 3456 7890$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^concierge@chronologie\.id$/i }).length).toBeGreaterThan(0)

    const whatsappLinks = screen.getAllByRole('link', { name: /inquire via whatsapp/i })
    expect(whatsappLinks.length).toBeGreaterThan(0)
    expect(whatsappLinks[0]).toHaveAttribute('href', '/contact')

    const directionsLinks = screen.getAllByRole('link', { name: /get directions/i })
    expect(directionsLinks.length).toBeGreaterThan(0)
    expect(directionsLinks[0]).toHaveAttribute('href', 'https://maps.google.com/?q=Plaza+Indonesia+Jakarta')
  })
})
