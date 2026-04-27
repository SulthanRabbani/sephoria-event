import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import AboutPage from './about/page'
import CollectionPage from './collection/page'
import ProductDetailPage from './collection/submariner-no-date/page'
import JournalDetailPage from './journal/the-art-of-collecting-vintage-rolex/page'
import JournalPage from './journal/page'
import BrandDetailPage from './maisons/aerowatch/page'
import BrandPage from './maisons/page'
import ContactPage from './contact/page'

describe('Chronologie route pages', () => {
  it('renders the collection listing page from the Figma copy', () => {
    render(<CollectionPage />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /each piece,\s+a story worth telling\./i,
      })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/all pieces/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/diving instruments/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/dress timepieces/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/chronographs/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/portugieser\s+automatic/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /inquire via whatsapp/i }).length).toBeGreaterThan(0)
  })

  it('renders the product detail page with technical details and related pieces', () => {
    render(<ProductDetailPage />)

    expect(screen.getByText(/bell & ross/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /br 05 black ceramic/i })).toBeInTheDocument()
    expect(screen.getByText(/ref\. 124060/i)).toBeInTheDocument()
    expect(screen.getByText(/technical details/i)).toBeInTheDocument()
    expect(screen.getByText(/you may also consider/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /check availability via whatsapp/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /schedule a private viewing/i })).toBeInTheDocument()
  })

  it('renders the maisons index page with featured and grid maisons', () => {
    render(<BrandPage />)

    expect(screen.getByRole('heading', { level: 1, name: /house we have the privilege to carry\./i })).toBeInTheDocument()
    expect(screen.getAllByText(/discover rolex/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/discover patek philippe/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/all maisons/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/audemars piguet/i)).toBeInTheDocument()
    expect(screen.getByText(/jaeger-lecoultre/i)).toBeInTheDocument()
  })

  it('renders the maison detail page with filters and product pricing', () => {
    render(<BrandDetailPage />)

    expect(screen.getByRole('heading', { level: 1, name: /aerowatch/i })).toBeInTheDocument()
    expect(screen.getByText(/product filter/i)).toBeInTheDocument()
    expect(screen.getByText(/default sorting/i)).toBeInTheDocument()
    expect(screen.getAllByText(/bell & ross/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/br 03 skeleton/i)).toBeInTheDocument()
    expect(screen.getByText(/\$\s*6,375/i)).toBeInTheDocument()
  })

  it('renders the journal index page with feature and secondary articles', () => {
    render(<JournalPage />)

    expect(screen.getByRole('heading', { level: 1, name: /notes from the atelier\./i })).toBeInTheDocument()
    expect(screen.getByText(/the art of collecting vintage rolex/i)).toBeInTheDocument()
    expect(screen.getByText(/inside patek philippe craftsmanship/i)).toBeInTheDocument()
    expect(screen.getByText(/what defines a modern luxury watch/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /explore article/i }).length).toBeGreaterThanOrEqual(3)
  })

  it('renders the journal detail page with the full article and related stories', () => {
    render(<JournalDetailPage />)

    expect(screen.getByRole('heading', { level: 1, name: /the art of collecting vintage rolex/i })).toBeInTheDocument()
    expect(screen.getAllByText(/april 21, 2026/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/6 min read/i)).toBeInTheDocument()
    expect(screen.getByText(/there is a particular kind of collector we have come to admire/i)).toBeInTheDocument()
    expect(screen.getByText(/inside patek philippe craftsmanship/i)).toBeInTheDocument()
    expect(screen.getByText(/what defines a modern luxury watch/i)).toBeInTheDocument()
  })

  it('renders the about page with story, vision, mission, and services', () => {
    render(<AboutPage />)

    expect(screen.getByRole('heading', { level: 1, name: /a house built on patience, provenance, and quiet conviction\./i })).toBeInTheDocument()
    expect(screen.getByText(/our story/i)).toBeInTheDocument()
    expect(screen.getByText(/vision/i)).toBeInTheDocument()
    expect(screen.getByText(/mission/i)).toBeInTheDocument()
    expect(screen.getByText(/the service/i)).toBeInTheDocument()
    expect(screen.getByText(/private viewings/i)).toBeInTheDocument()
  })

  it('renders the contact page with boutique details, hours, and actions', () => {
    render(<ContactPage />)

    expect(screen.getByRole('heading', { level: 1, name: /notes from the atelier\./i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /plaza indonesia/i })).toBeInTheDocument()
    expect(screen.getAllByText(/^boutique$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^hours$/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/^contact$/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/private viewings available outside opening hours\./i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /^\+62 812 3456 7890$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^concierge@chronologie\.id$/i }).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: /inquire via whatsapp/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get directions/i })).toBeInTheDocument()
    expect(screen.getByTitle(/chronologie boutique location map/i)).toBeInTheDocument()
  })
})
