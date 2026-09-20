import { motion } from 'framer-motion'
import {
  Boxes,
  Code2,
  Database,
  GitBranch,
  Github,
  Layers,
  LineChart,
  MessageSquare,
  Terminal,
  Users,
  Wallet,
  Wand2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillGroups } from '../data/content'
import SectionHeading from './SectionHeading'

const iconMap: Record<string, LucideIcon> = {
  C: Terminal,
  HTML: Code2,
  CSS: Wand2,
  Java: Code2,
  React: Boxes,
  'Next.js': Layers,
  MySQL: Database,
  SAP: Layers,
  'Visual Studio Code': Code2,
  Git: GitBranch,
  GitHub: Github,
  Marketing: LineChart,
  Finance: Wallet,
  Teamwork: Users,
  Communication: MessageSquare,
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-content">
        <SectionHeading
          title="Skills & Technologies"
          description="Tools and areas I’ve worked with across coursework, projects, and my internship."
        />

        <div className="space-y-10">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.category}>
              <h3 className="mb-4 text-sm font-medium text-muted">{group.category}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {group.skills.map((skill, i) => {
                  const Icon = iconMap[skill] ?? Code2
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: (groupIndex * 0.03 + i * 0.04) % 0.5 }}
                      className="card-surface group flex items-center gap-3 p-4 transition-colors duration-200 hover:border-accent-from/50"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-fg/[0.03] text-accent-from transition-transform duration-200 group-hover:scale-110">
                        <Icon size={16} strokeWidth={1.75} />
                      </span>
                      <span className="text-[13.5px] font-medium text-fg">{skill}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
