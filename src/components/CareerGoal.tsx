import { motion } from 'framer-motion'
import { Layers, Target, Workflow } from 'lucide-react'
import { careerGoal } from '../data/content'

const pillars = [
  { icon: Layers, label: 'Information Systems studies' },
  { icon: Workflow, label: 'Condor Electronics DSI internship' },
  { icon: Target, label: 'SAP SD career direction' },
]

export default function CareerGoal() {
  return (
    <section className="section-pad relative">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-gradient opacity-[0.12] blur-3xl" />

          <p className="mb-2 text-[13px] text-muted">Career Direction</p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Working toward becoming a{' '}
            <span className="gradient-text">{careerGoal.title}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">{careerGoal.description}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            {pillars.map((pillar, i) => (
              <div key={pillar.label} className="flex items-center gap-2 rounded-full border border-border bg-fg/[0.03] px-4 py-2 text-[13px] text-muted">
                <pillar.icon size={14} strokeWidth={1.75} className="text-accent-from" />
                {pillar.label}
                {i < pillars.length - 1 && <span className="ml-1 text-border">&rarr;</span>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
