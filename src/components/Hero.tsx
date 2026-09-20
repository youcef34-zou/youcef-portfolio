import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, User } from 'lucide-react'
import { profile } from '../data/content'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pt-24 pb-16">
      <div className="container-content grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-5 font-mono text-[13px] text-muted">
            Bordj Bou Arreridj, Algeria
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-[3.6rem]"
          >
            Hi, I’m{' '}
            <span className="bg-accent-gradient bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-pan">
              Youcef Zouaoui
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-xl font-medium text-muted sm:text-2xl">
            {profile.title}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted">
            Information Systems student passionate about technology, web development, marketing, and finance.
            Building digital experiences while exploring business, enterprise systems, and modern technologies.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => scrollTo('#projects')} className="btn-primary">
              View My Work
            </button>
            <a href={profile.cv} download className="btn-secondary">
              <Download size={15} strokeWidth={2} />
              Download CV
            </a>
            <button type="button" onClick={() => scrollTo('#contact')} className="btn-secondary">
              <Mail size={15} strokeWidth={2} />
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-border bg-surface shadow-[0_0_0_1px_rgba(56,189,248,0.08)] transition-transform duration-500 hover:-translate-y-1">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-accent-gradient opacity-[0.15] blur-2xl" />
            {!imgError ? (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                onError={() => setImgError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-ink text-muted">
                <User size={40} strokeWidth={1.25} />
                <span className="px-6 text-center text-xs">
                  Add photo at <code className="font-mono text-accent-from">{profile.photo}</code>
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent-from sm:block"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
