import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section-pad relative">
      <div className="container-content">
        <SectionHeading title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="card-surface flex flex-col gap-6 p-7 sm:flex-row sm:items-start sm:p-9"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-fg/[0.03] text-accent-from">
            <GraduationCap size={22} strokeWidth={1.75} />
          </span>

          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
              <span className="font-mono text-[13px] text-muted">{education.years}</span>
            </div>
            <p className="mt-1.5 text-[14.5px] font-medium text-accent-from">{education.university}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-[12.5px] text-muted/70">Specialization</p>
                <p className="mt-1 text-[14.5px] text-fg">{education.specialization}</p>
              </div>
              <div>
                <p className="text-[12.5px] text-muted/70">Current level</p>
                <p className="mt-1 text-[14.5px] text-fg">{education.level}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
