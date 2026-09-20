import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

export default function SectionHeading({ title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <div className={`mb-4 h-[3px] w-10 rounded-full bg-accent-gradient ${align === 'center' ? 'mx-auto' : ''}`} />
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-muted">{description}</p>}
    </motion.div>
  )
}
