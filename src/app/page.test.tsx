import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from './page'

describe('Chronologie homepage', () => {
  it('renders the homepage hero, featured collection, editorial sections, and footer from the Figma design', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /time, considered\s+with intention\./i,
      })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: /inquire via whatsapp/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /explore collection/i }).length).toBeGreaterThan(0)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /a curated selection of exceptional timepieces/i,
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/submariner\s+no-date/i)).toBeInTheDocument()
    expect(screen.getByText(/ref\. 5172g/i)).toBeInTheDocument()
    expect(screen.getByText(/cosmograph\s+daytona/i)).toBeInTheDocument()
    expect(screen.getByText(/calatrava\s+ultra-thin/i)).toBeInTheDocument()
    expect(screen.getByText(/datejust 36/i)).toBeInTheDocument()
    expect(screen.getByText(/royal oak/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /we do not sell watches\.\s+we curate them\./i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /an invitation to spend time with time\./i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /insights on time, craftsmanship, and collecting/i,
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/the art of collecting vintage rolex/i)).toBeInTheDocument()
    expect(screen.getByText(/inside patek philippe craftsmanship/i)).toBeInTheDocument()
    expect(screen.getByText(/what defines a modern luxury watch/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /begin a quiet conversation\./i,
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText(/authorised pre-owned specialists/i)).toBeInTheDocument()
  })

  it('renders the homepage navigation and boutique details from the Figma copy', () => {
    render(<Home />)

    expect(screen.getAllByRole('link', { name: /^home$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^collection$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^journal$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^about$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /^contact$/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /visit the store/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /book a private viewing/i }).length).toBeGreaterThan(0)

    expect(screen.getAllByText(/plaza indonesia, level 2/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/jl\. m\.h\. thamrin kav\. 28.?30/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/jakarta pusat 10350/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/\+62 812 3456 7890/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/concierge@chronologie\.id/i).length).toBeGreaterThan(0)
  })
})
