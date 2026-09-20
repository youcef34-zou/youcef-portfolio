import { motion } from 'framer-motion'
import { Infinity as InfinityIcon, Megaphone, Users2 } from 'lucide-react'
import { infinityClub } from '../data/content'
import SectionHeading from './SectionHeading'

const groups = [
  { title: 'What I do', items: infinityClub.activities, icon: Users2 },
  { title: 'Workshops & events', items: infinityClub.workshops, icon: Megaphone },
  { title: 'Initiatives I\u2019ve helped run', items: infinityClub.initiatives, icon: InfinityIcon },
]

export default function InfinityClub() {
  return (
    <section id="infinity-club" className="section-pad relative">
      <div className="container-content">
        <SectionHeading title="Infinity Club" description={infinityClub.description} />

        <div className="card-surface mb-8 flex flex-wrap items-center gap-4 p-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-ink">
            <InfinityIcon size={22} strokeWidth={2} />
          </span>
          <div>
            <p className="font-display text-lg font-semibold">{infinityClub.name}</p>
            <p className="text-[13.5px] text-accent-from">{infinityClub.role}</p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card-surface p-6"
            >
              <div className="mb-4 flex items-center gap-2.5 text-fg">
                <group.icon size={17} strokeWidth={1.75} className="text-accent-from" />
                <h3 className="text-[14.5px] font-semibold">{group.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((entry) => (
                  <li key={entry} className="flex gap-2.5 text-[14px] leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-from" />
                    {entry}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
