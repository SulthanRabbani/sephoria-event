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
    expect(hero.className).toContain('leading-[1.05]')

    const eyebrow = screen.getByText(/the journal/i).parentElement
    expect(eyebrow?.className ?? '').toContain('font-body')
    expect(eyebrow?.className ?? '').toContain('text-[14px]')
    expect(eyebrow?.className ?? '').toContain('tracking-[0.24em]')

    const heroBody = screen.getByText(/essays, dispatches and quiet observations on horology/i)
    expect(heroBody.className).toContain('text-[18px]')
    expect(heroBody.className).toContain('leading-[1.5]')

    const plazaHeading = screen.getByRole('heading', { level: 2, name: /plaza indonesia/i })
    const leftColumn = plazaHeading.parentElement
    expect(leftColumn?.className ?? '').toContain('max-w-[460px]')

    const hoursSection = leftColumn?.children[3] as HTMLElement | undefined
    expect(hoursSection?.className ?? '').toContain('mt-10')

    const contactSection = leftColumn?.children[4] as HTMLElement | undefined
    expect(contactSection?.className ?? '').toContain('mt-10')

    const primaryActions = screen.getAllByRole('link', { name: /inquire via whatsapp/i })
    expect(primaryActions.length).toBeGreaterThan(0)
    expect(primaryActions[0].className).toContain('min-h-[56px]')
    expect(primaryActions[0].className).toContain('min-w-[320px]')
    expect(primaryActions[0].className).toContain('rounded-[6px]')
    expect(primaryActions[0].className).toContain('text-[15px]')
    expect(primaryActions[0].className).toContain('tracking-[0.16em]')

    const secondaryActions = screen.getAllByRole('link', { name: /get directions/i })
    expect(secondaryActions.length).toBeGreaterThan(0)
    expect(secondaryActions[0].className).toContain('min-h-[56px]')
    expect(secondaryActions[0].className).toContain('min-w-[220px]')
    expect(secondaryActions[0].className).toContain('rounded-[6px]')
    expect(secondaryActions[0].className).toContain('text-[15px]')
    expect(secondaryActions[0].className).toContain('tracking-[0.16em]')

    const ctaRow = primaryActions[0].parentElement
    expect(ctaRow?.className ?? '').toContain('mt-8')
    expect(ctaRow?.className ?? '').toContain('gap-4')

    const map = screen.getByTitle(/chronologie boutique location map/i)
    const mapFrame = map.parentElement
    expect(mapFrame?.className ?? '').toContain('aspect-[4/3]')
    expect(mapFrame?.className ?? '').not.toContain('shadow-[')

    const footerBrand = screen.getAllByText(/^chronologie$/i).at(-1)
    const footerWrapper = footerBrand?.closest('footer')?.firstElementChild
    expect(footerWrapper?.className ?? '').toContain('lg:pt-20')
    expect(footerWrapper?.className ?? '').toContain('lg:pb-[52px]')
  })
})
