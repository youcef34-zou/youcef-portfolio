// ============================================================================
// Single source of truth for every piece of personal content on the site.
// Edit values here — components read from this file, nothing is hardcoded
// in the JSX. Replace placeholder assets (photo, CV, project images) by
// dropping files into /public and updating the paths below.
// ============================================================================

export const profile = {
  name: 'Youcef Zouaoui',
  age: 20,
  title: 'Computer Science Student',
  specialization: 'Information Systems',
  specializationFr: 'Systèmes Informatiques',
  university: 'Mohamed Bachir El Ibrahimi University of Bordj Bou Arreridj',
  level: '3rd Year Licence (Bachelor\u2019s Degree)',
  location: 'Bordj Bou Arreridj, Algeria',
  email: 'youcefzouoaui689@gmail.com',
  phone: '0791804788',
  photo: '/images/profile.jpg', // replace with the real photo
  cv: '/cv/Youcef-Zouaoui-CV.pdf', // replace with the real CV file
}

export const social = {
  github: 'https://github.com/youcef34-zou',
  linkedin: null as string | null, // exact URL not provided — handle only
  linkedinHandle: 'Youcef Zouaoui',
  instagram: null as string | null,
  instagramHandle: 'youcef.zouaoui34',
  facebook: null as string | null,
  facebookHandle: 'Zouaoui Youcef',
  email: 'mailto:youcefzouoaui689@gmail.com',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Infinity Club', href: '#infinity-club' },
  { label: 'Contact', href: '#contact' },
]

export const aboutStats = [
  { value: '20', label: 'Years old' },
  { value: '3rd Year', label: 'Computer Science' },
  { value: 'Info. Systems', label: 'Specialization' },
  { value: 'BBA, Algeria', label: 'Based in' },
]

export const aboutParagraphs = [
  'I\u2019m studying Computer Science, specializing in Information Systems, at Mohamed Bachir El Ibrahimi University of Bordj Bou Arreridj.',
  'I enjoy building web applications and exploring how technology can solve real-world problems.',
  'My main interests include web development, marketing, and finance.',
  'My career goal is to become a SAP SD specialist, focusing on Sales and Distribution processes and helping businesses optimize their sales, order management, delivery, and billing operations.',
]

export type SkillCategory = {
  category: string
  skills: string[]
}

export const skillGroups: SkillCategory[] = [
  { category: 'Programming', skills: ['C', 'HTML', 'CSS', 'Java'] },
  { category: 'Frameworks / Web', skills: ['React', 'Next.js'] },
  { category: 'Database', skills: ['MySQL'] },
  { category: 'Enterprise / Business', skills: ['SAP'] },
  { category: 'Tools', skills: ['Visual Studio Code', 'Git', 'GitHub'] },
  { category: 'Professional Skills', skills: ['Marketing', 'Finance', 'Teamwork', 'Communication'] },
]

export type ExperienceItem = {
  role: string
  org: string
  period: string
  description: string
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'IT Intern \u2014 DSI Department',
    org: 'Condor Electronics',
    period: '2026',
    description:
      'Completed an internship within the DSI department, gaining practical exposure to SAP, software development, CRM, MES/WMS, Master Data, networking, IT support, Business Intelligence, and cybersecurity. Learned how information systems and enterprise technologies support business operations.',
    tags: [
      'SAP',
      'Development',
      'CRM',
      'MES/WMS',
      'Master Data',
      'Networking',
      'IT Support',
      'Business Intelligence',
      'Cybersecurity',
    ],
  },
]

export type Project = {
  name: string
  categories: Array<'Web' | 'AI' | 'Information Systems'>
  description: string
  tech: string[]
  url?: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'MediFlow AI',
    categories: ['AI', 'Web', 'Information Systems'],
    description:
      'An AI-powered digital healthcare platform connecting doctors, patients, laboratories, and pharmacies \u2014 improving healthcare workflows through AI-assisted medical report analysis, clinical decision support, medication safety checks, and centralized healthcare data management.',
    tech: ['AI', 'Healthcare', 'Web Platform'],
    url: 'https://medi-flow-ai-dz.netlify.app/',
    featured: true,
  },
]

export const projectFilters = ['All', 'Web', 'AI', 'Information Systems'] as const

export type Achievement = {
  title: string
  meta?: string
  description: string
}

export const achievements: Achievement[] = [
  {
    title: '2nd Place \u2014 University Hackathon',
    meta: 'Project: MediFlow AI',
    description: 'Won 2nd place with MediFlow AI in a university hackathon.',
  },
  {
    title: '3-Day Hackathon \u2014 M\u2019sila',
    meta: 'AI \u00b7 Cybersecurity \u00b7 Problem Solving \u00b7 Graphic Design',
    description: 'Took part across four tracks: Artificial Intelligence, Cybersecurity, Problem Solving, and Graphic Design.',
  },
  {
    title: 'AI & Problem-Solving Hackathons',
    description: 'Participated in additional hackathons focused on artificial intelligence and problem-solving challenges.',
  },
]

export const infinityClub = {
  name: 'Infinity Club',
  role: 'Active Member & Organizer',
  description:
    'Infinity Club is a scientific student community focused on Computer Science education, skill development, workshops, and events, helping students learn, collaborate, and develop practical skills.',
  activities: [
    'Event organization',
    'Logistics',
    'Team collaboration',
    'Workshop preparation',
    'Student activities',
    'Marketing',
  ],
  workshops: [
    'Technical and Computer Science workshops',
    'Open Day events',
    'Student learning and networking activities',
    '\u201cHow to Get Your First Client\u201d workshop',
  ],
  initiatives: [
    'Open Day activities',
    'Student workshops and learning sessions',
    'Club events and activities',
    'Event organization and logistics for club initiatives',
  ],
}

export const education = {
  university: profile.university,
  degree: 'Licence (Bachelor\u2019s Degree) in Computer Science',
  specialization: `${profile.specialization} (${profile.specializationFr})`,
  years: '2024 \u2013 Present',
  level: profile.level,
}

export const careerGoal = {
  title: 'SAP SD Specialist',
  description:
    'My career goal is to specialize in SAP Sales and Distribution (SD), focusing on sales processes, order management, delivery, billing, and how enterprise information systems support business operations.',
}
