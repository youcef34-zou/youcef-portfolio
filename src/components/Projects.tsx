import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, HeartPulse } from 'lucide-react'
import { projectFilters, projects } from '../data/content'
import SectionHeading from './SectionHeading'

type Filter = (typeof projectFilters)[number]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.categories.includes(filter as (typeof p.categories)[number]))
  }, [filter])

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-content">
        <SectionHeading
          title="Featured Projects"
          description="A closer look at what I’ve built — more projects will land here as they ship."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                filter === f
                  ? 'border-accent-from/60 bg-accent-from/10 text-accent-from'
                  : 'border-border text-muted hover:text-fg'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {visible.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid gap-6"
            >
              {visible.map((project) => (
                <div
                  key={project.name}
                  className="card-surface group grid gap-0 overflow-hidden transition-colors duration-300 hover:border-accent-from/40 lg:grid-cols-[1.1fr_1fr]"
                >
                  <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br from-surface via-ink to-ink p-8">
                    <div className="pointer-events-none absolute -inset-10 bg-accent-gradient opacity-[0.12] blur-3xl transition-opacity duration-500 group-hover:opacity-[0.2]" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-fg/[0.04] text-accent-from shadow-lg transition-transform duration-500 group-hover:scale-105">
                      <HeartPulse size={38} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-9">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.categories.map((cat) => (
                        <span key={cat} className="tag-chip">
                          {cat}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="rounded-md bg-fg/[0.04] px-2.5 py-1 text-[12px] text-muted">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn-primary !px-5 !py-2.5 text-[13.5px]"
                        >
                          Live Demo
                          <ArrowUpRight size={15} strokeWidth={2} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn-secondary !px-5 !py-2.5 text-[13.5px]"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-dashed border-border p-10 text-center text-[14px] text-muted"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
