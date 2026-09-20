import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { profile, social } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="container-content flex flex-col items-center gap-5 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-[15px] font-semibold">{profile.name}</p>
          <p className="text-[13px] text-muted">Computer Science Student | Information Systems</p>
        </div>

        <div className="flex items-center gap-4">
          <a href={social.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="text-muted transition-colors hover:text-accent-from">
            <Github size={17} strokeWidth={1.75} />
          </a>
          <a
            href={social.linkedin ?? `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(social.linkedinHandle)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent-from"
          >
            <Linkedin size={17} strokeWidth={1.75} />
          </a>
          <a
            href={social.instagram ?? `https://www.instagram.com/${social.instagramHandle}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-accent-from"
          >
            <Instagram size={17} strokeWidth={1.75} />
          </a>
          <a
            href={social.facebook ?? `https://www.facebook.com/search/top?q=${encodeURIComponent(social.facebookHandle)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
            className="text-muted transition-colors hover:text-accent-from"
          >
            <Facebook size={17} strokeWidth={1.75} />
          </a>
          <a href={social.email} aria-label="Email" className="text-muted transition-colors hover:text-accent-from">
            <Mail size={17} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="text-center text-[12.5px] text-muted">© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
