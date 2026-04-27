import type { ActionLink } from '@/types/chronologie'

type CTAButtonProps = {
  action: ActionLink
  variant?: 'dark' | 'light' | 'outline-dark' | 'outline-light' | 'dark-hero'
  className?: string
  icon?: 'whatsapp'
}

export function CTAButton({ action, variant = 'dark', className = '', icon }: CTAButtonProps) {
  const classes = {
    dark: 'border-[#352d27] bg-[#352d27] text-[#f3ede7] hover:bg-[#2a241f] hover:border-[#2a241f]',
    light: 'border-[#f3ede7] bg-[#f3ede7] text-[#1e1a17] hover:bg-white hover:border-white',
    'outline-dark': 'border-[#3b332d] bg-transparent text-[#2f2924] hover:bg-[#2f2924] hover:text-[#f3ede7]',
    'outline-light': 'border-white/70 bg-transparent text-white hover:bg-white hover:text-[#1e1a17]',
    'dark-hero': 'border-[#211c18] bg-[#211c18]/90 text-[#f3ede7] hover:bg-[#171311] hover:border-[#171311]',
  }

  return (
    <a
      href={action.href}
      className={`inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[8px] border px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.02em] transition duration-300 ${classes[variant]} ${className}`}
    >
      <span>{action.label}</span>
      {icon === 'whatsapp' && (
        <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-current text-[9px] leading-none">
          W
        </span>
      )}
    </a>
  )
}
