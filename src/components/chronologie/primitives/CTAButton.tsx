import type { ActionLink } from '@/types/chronologie'

type CTAButtonProps = {
  action: ActionLink
  variant?: 'dark' | 'light' | 'outline-dark' | 'outline-light'
  className?: string
}

export function CTAButton({ action, variant = 'dark', className = '' }: CTAButtonProps) {
  const classes = {
    dark: 'border-[var(--color-primary-700)] bg-[var(--color-primary-700)] text-[var(--color-white)] hover:bg-[var(--color-primary-600)] hover:border-[var(--color-primary-600)]',
    light:
      'border-[rgba(250,250,250,0.92)] bg-[rgba(250,250,250,0.96)] text-[var(--color-primary-700)] hover:bg-[var(--color-white)]',
    'outline-dark':
      'border-[var(--color-border)] bg-transparent text-[var(--color-primary-600)] hover:border-[var(--color-primary-500)] hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-700)]',
    'outline-light': 'border-white/26 bg-transparent text-[var(--color-white)] hover:border-white/50 hover:bg-white/8',
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
