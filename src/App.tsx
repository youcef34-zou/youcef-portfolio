import About from './components/About'
import Achievements from './components/Achievements'
import Background from './components/Background'
import CareerGoal from './components/CareerGoal'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import InfinityClub from './components/InfinityClub'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <CareerGoal />
        <Achievements />
        <InfinityClub />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
