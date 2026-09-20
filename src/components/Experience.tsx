import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-content">
        <SectionHeading title="Experience" />

        <ol className="relative border-l border-border pl-8 sm:pl-10">
          {experience.map((item, i) => (
            <motion.li
              key={item.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-2"
            >
              <span className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-ink text-accent-from sm:-left-[49px]">
                <Briefcase size={14} strokeWidth={1.75} />
              </span>

              <div className="card-surface p-6 transition-colors duration-200 hover:border-accent-from/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                  <span className="font-mono text-[13px] text-muted">{item.period}</span>
                </div>
                <p className="mt-1 text-[14.5px] font-medium text-accent-from">{item.org}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{item.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
