import { motion } from 'framer-motion'
import { Award, Trophy } from 'lucide-react'
import { achievements } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="container-content">
        <SectionHeading title="Achievements & Hackathons" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-surface flex flex-col gap-4 p-6 transition-colors duration-200 hover:border-accent-from/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-accent-gradient/10 text-accent-from">
                {i === 0 ? <Trophy size={18} strokeWidth={1.75} /> : <Award size={18} strokeWidth={1.75} />}
              </span>
              <div>
                <h3 className="font-display text-[15.5px] font-semibold leading-snug">{item.title}</h3>
                {item.meta && <p className="mt-1 font-mono text-[12px] text-accent-from">{item.meta}</p>}
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
