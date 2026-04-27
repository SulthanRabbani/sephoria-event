import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from './page'

describe('Chronologie about page', () => {
  it('renders the editorial about-page structure from the approved screenshot', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /a house built on patience, provenance, and quiet conviction\./i,
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/about chronologie/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /visit the store/i }).length).toBeGreaterThan(0)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /our story/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /vision/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /mission/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /the service/i,
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('shows the service list and boutique contact details from the screenshot', () => {
    render(<Home />)

    expect(screen.getAllByText(/personal sourcing/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/full authentication/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/private viewings/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/aftercare/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/plaza indonesia, level 3/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/jl\. m\.h\. thamrin kav\. 28.?30/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/jakarta pusat 10350/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/concierge@chronologie\.id/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/\+62 813 3366 7890/i).length).toBeGreaterThan(0)
  })
})
