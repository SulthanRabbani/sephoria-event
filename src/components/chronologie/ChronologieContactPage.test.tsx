import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { chronologieContactPage } from '@/content/chronologie/contact'
import { chronologieHome } from '@/content/chronologie/home'

import { ChronologieContactPage } from './ChronologieContactPage'

describe('ChronologieContactPage native candidate', () => {
  it('matches the current contact render redlines for hero and CTA proportions', () => {
    render(
      <ChronologieContactPage
        brand={chronologieHome.brand}
        footer={chronologieHome.footer}
        data={chronologieContactPage}
      />
    )

    const hero = screen.getByRole('heading', { level: 1, name: /notes from the atelier\./i })
    expect(hero.className).toContain('text-[60px]')
    expect(hero.className).toContain('leading-[1.04]')

    const eyebrow = screen.getByText(/the journal/i).parentElement
    expect(eyebrow?.className ?? '').toContain('font-body')
    expect(eyebrow?.className ?? '').toContain('text-[14px]')
    expect(eyebrow?.className ?? '').toContain('tracking-[0.24em]')

    const heroBody = screen.getByText(/essays, dispatches and quiet observations on horology/i)
    expect(heroBody.className).toContain('text-[18px]')
    expect(heroBody.className).toContain('leading-[1.6]')

    const primaryActions = screen.getAllByRole('link', { name: /inquire via whatsapp/i })
    expect(primaryActions.length).toBeGreaterThan(0)
    expect(primaryActions[0].className).toContain('min-h-[50px]')
    expect(primaryActions[0].className).toContain('min-w-[243px]')
    expect(primaryActions[0].className).toContain('rounded-[4px]')
    expect(primaryActions[0].className).toContain('text-[12px]')
    expect(primaryActions[0].className).toContain('tracking-[0.18em]')

    const secondaryActions = screen.getAllByRole('link', { name: /get directions/i })
    expect(secondaryActions.length).toBeGreaterThan(0)
    expect(secondaryActions[0].className).toContain('min-h-[50px]')
    expect(secondaryActions[0].className).toContain('min-w-[203px]')
    expect(secondaryActions[0].className).toContain('rounded-[4px]')
    expect(secondaryActions[0].className).toContain('text-[12px]')
    expect(secondaryActions[0].className).toContain('tracking-[0.18em]')

    const ctaRow = primaryActions[0].parentElement
    expect(ctaRow?.className ?? '').toContain('gap-[25px]')
  })
})
