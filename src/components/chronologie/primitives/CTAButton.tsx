import type { ActionLink } from '@/types/chronologie'

type CTAButtonProps = {
  action: ActionLink
  variant?: 'dark' | 'light' | 'outline-dark' | 'outline-light' | 'outline-hero'
  className?: string
  icon?: 'whatsapp'
}

export function CTAButton({ action, variant = 'dark', className = '', icon }: CTAButtonProps) {
  const classes = {
    dark: 'min-h-[48px] rounded-[3px] border border-[#332922] bg-[#332922] px-8 text-[#fffdf9] shadow-[0_10px_24px_rgba(51,41,34,0.12)] hover:border-[#2a211c] hover:bg-[#2a211c]',
    light:
      'min-h-[48px] rounded-full border border-[rgba(255,255,255,0.28)] bg-[rgba(245,240,234,0.96)] px-8 text-[#26211d] hover:bg-white',
    'outline-dark': 'min-h-[48px] rounded-[3px] border border-[#3a312a] bg-transparent px-8 text-[#2f2924] hover:bg-[#2f2924] hover:text-[#f3ede7]',
    'outline-light': 'min-h-[48px] rounded-[12px] border border-white/70 bg-transparent px-7 text-white hover:bg-white hover:text-[#1e1a17]',
    'outline-hero':
      'min-h-[48px] rounded-[999px] border border-[rgba(255,255,255,0.54)] bg-[rgba(17,14,12,0.28)] px-8 text-[#f4eee7] backdrop-blur-[2px] hover:bg-[rgba(17,14,12,0.38)]',
  }

  return (
    <a
      href={action.href}
      className={`inline-flex items-center justify-center gap-2.5 whitespace-nowrap py-3 text-[12px] font-medium uppercase tracking-[0.18em] transition duration-300 ${classes[variant]} ${className}`}
    >
      <span>{action.label}</span>
      {icon === 'whatsapp' && (
        <span
          aria-hidden="true"
          className="inline-flex h-[17px] w-[17px] items-center justify-center rounded-full border border-white/28 bg-[rgba(255,255,255,0.08)] text-[#fffdf9]"
        >
          <svg viewBox="0 0 24 24" className="h-[10px] w-[10px] fill-current" role="presentation">
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.56 2 2.1 6.46 2.1 11.94c0 1.75.46 3.46 1.34 4.97L2 22l5.24-1.37a9.95 9.95 0 0 0 4.78 1.22h.01c5.47 0 9.93-4.46 9.93-9.94 0-2.65-1.03-5.14-2.91-7ZM12.03 20.17h-.01a8.28 8.28 0 0 1-4.22-1.16l-.3-.18-3.11.81.83-3.03-.2-.31a8.2 8.2 0 0 1-1.28-4.36c0-4.55 3.71-8.26 8.28-8.26 2.21 0 4.28.86 5.84 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.56-3.71 8.27-8.24 8.27Zm4.54-6.17c-.25-.13-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.05-.38-2-1.22-.74-.66-1.23-1.47-1.37-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.09 0 1.22.9 2.41 1.02 2.57.13.17 1.77 2.7 4.28 3.78.6.26 1.07.42 1.44.54.61.2 1.17.17 1.61.1.49-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.17-.48-.29Z" />
          </svg>
        </span>
      )}
    </a>
  )
}
