import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from './page'

describe('Chronologie landing page', () => {
  it('renders the editorial luxury homepage structure from the screenshot', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /time, considered with intention\./i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /a curated selection of exceptional timepieces/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /we do not sell watches\. we curate them\./i,
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

    expect(screen.getByRole('link', { name: /shop collection/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('shows featured watches, editorial stories, and footer contact details', () => {
    render(<Home />)

    expect(screen.getAllByText(/submariner no-date/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/royal oak jumbo/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/the art of collecting vintage rolex/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/inside patek philippe craftsmanship/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/what defines a modern luxury watch/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/concierge@chronologie\.id/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/authorised pre-owned specialists/i).length).toBeGreaterThan(0)
  })
})
