import { motion } from 'framer-motion'
import { aboutParagraphs, aboutStats } from '../data/content'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-content">
        <SectionHeading title="About Me" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:gap-16">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="text-[15.5px] leading-relaxed text-muted"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card-surface flex flex-col justify-center gap-1.5 p-5"
              >
                <span className="font-display text-xl font-semibold text-fg sm:text-2xl">{stat.value}</span>
                <span className="text-[13px] text-muted">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
