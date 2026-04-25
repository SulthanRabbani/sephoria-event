import type { ActionLink } from '@/types/chronologie'

type CTAButtonProps = {
  action: ActionLink
  variant?: 'dark' | 'light' | 'outline-dark' | 'outline-light'
  className?: string
}

export function CTAButton({ action, variant = 'dark', className = '' }: CTAButtonProps) {
  const classes = {
    dark: 'border-[var(--color-night)] bg-[var(--color-night)] text-[var(--color-paper)] hover:bg-[#2b2420] hover:border-[#2b2420]',
    light: 'border-[rgba(255,255,255,0.85)] bg-[rgba(255,255,255,0.92)] text-[var(--color-ink)] hover:bg-white',
    'outline-dark': 'border-[rgba(35,29,24,0.2)] bg-transparent text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[rgba(35,29,24,0.04)]',
    'outline-light': 'border-white/28 bg-transparent text-[var(--color-paper)] hover:border-white/55 hover:bg-white/6',
  }

  return (
    <a
      href={action.href}
      className={`inline-flex min-h-12 items-center justify-center border px-6 py-3 text-[11px] font-medium uppercase tracking-[0.28em] transition duration-300 ${classes[variant]} ${className}`}
    >
      {action.label}
    </a>
  )
}
