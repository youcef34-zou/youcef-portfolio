import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/content'
import SectionHeading from './SectionHeading'

type Status = 'idle' | 'submitting' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // ------------------------------------------------------------------
    // No email backend is connected yet. This is where a service such as
    // EmailJS, Formspree, or a custom API route would be called, e.g.:
    //
    //   await fetch('https://formspree.io/f/your-id', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //
    // For now the form validates and simulates a successful send so the
    // frontend experience is complete and ready to wire up.
    // ------------------------------------------------------------------
    await new Promise((resolve) => setTimeout(resolve, 900))

    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-content">
        <SectionHeading
          title="Let’s Work Together"
          description="I’m always open to new opportunities, collaborations, and interesting projects. Feel free to get in touch!"
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="card-surface flex items-center gap-4 p-5 transition-colors hover:border-accent-from/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-fg/[0.03] text-accent-from">
                <Mail size={16} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[12.5px] text-muted">Email</p>
                <p className="text-[14px] font-medium text-fg">{profile.email}</p>
              </div>
            </a>

            <a href={`tel:${profile.phone}`} className="card-surface flex items-center gap-4 p-5 transition-colors hover:border-accent-from/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-fg/[0.03] text-accent-from">
                <Phone size={16} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[12.5px] text-muted">Phone</p>
                <p className="text-[14px] font-medium text-fg">{profile.phone}</p>
              </div>
            </a>

            <div className="card-surface flex items-center gap-4 p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-fg/[0.03] text-accent-from">
                <MapPin size={16} strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[12.5px] text-muted">Location</p>
                <p className="text-[14px] font-medium text-fg">{profile.location}</p>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="card-surface space-y-5 p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange('name')}
                placeholder="Your full name"
                className="w-full rounded-xl border border-border bg-fg/[0.03] px-4 py-3 text-[14px] text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-accent-from/60"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange('email')}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-fg/[0.03] px-4 py-3 text-[14px] text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-accent-from/60"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange('message')}
                placeholder="Tell me about the opportunity or project..."
                className="w-full resize-none rounded-xl border border-border bg-fg/[0.03] px-4 py-3 text-[14px] text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-accent-from/60"
              />
            </div>

            <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto">
              {status === 'submitting' ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Sending…
                </>
              ) : status === 'sent' ? (
                <>
                  <CheckCircle2 size={15} />
                  Message sent
                </>
              ) : (
                <>
                  <Send size={15} strokeWidth={2} />
                  Send Message
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className="text-[13px] text-accent-from" role="status">
                Thanks for reaching out — I’ll reply as soon as I can.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
