import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Menu, X, Download } from 'lucide-react'
import { nav, profile, social } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'

type NavbarProps = {
  theme: Theme
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(nav.map((item) => item.href.replace('#', '')))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border/80 bg-ink/75 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="whitespace-nowrap font-display text-[15px] font-semibold tracking-tight"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => {
            const isActive = activeId === item.href.replace('#', '')
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors ${
                    isActive ? 'text-accent-from' : 'text-muted hover:text-fg'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-2.5 xl:flex">
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-accent-from"
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a
            href={social.linkedin ?? `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(social.linkedinHandle)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-accent-from"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href={profile.cv} download className="btn-secondary !px-4 !py-2 text-[13px]">
            <Download size={14} strokeWidth={2} />
            CV
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-border bg-ink/95 backdrop-blur-md xl:hidden"
          >
            <ul className="container-content flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-fg hover:bg-fg/[0.05]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-4 px-3 pt-2">
                <a href={social.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile" className="text-muted hover:text-accent-from">
                  <Github size={18} />
                </a>
                <a
                  href={social.linkedin ?? `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(social.linkedinHandle)}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn profile"
                  className="text-muted hover:text-accent-from"
                >
                  <Linkedin size={18} />
                </a>
                <a href={profile.cv} download className="ml-auto btn-secondary !px-4 !py-2 text-[13px]">
                  <Download size={14} />
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
