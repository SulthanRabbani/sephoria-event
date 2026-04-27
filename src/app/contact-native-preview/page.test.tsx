import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ContactNativePreviewPage from './page'

describe('ContactNativePreviewPage', () => {
  it('renders the native candidate preview while keeping the contact copy and CTA actions available', () => {
    render(<ContactNativePreviewPage />)

    expect(screen.getByRole('heading', { level: 1, name: /notes from the atelier\./i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /plaza indonesia/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /inquire via whatsapp/i }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: /get directions/i }).length).toBeGreaterThan(0)
    expect(screen.getByTitle(/chronologie boutique location map/i)).toBeInTheDocument()
  })
})
