import { useState } from 'react'
import Hero from './components/hero/Hero'
import Preloader from './components/preloader/Preloader'
import About from './components/about/about'
import Experiments from './components/experiments/Experiments'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Achievements from './components/achievements/Achievements'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)


  return (
    <div className="min-h-svh bg-[var(--color-void)]">
      <Hero />
      <About />
      <Skills />
      <Experiments />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
      {isLoading ? <Preloader onComplete={() => setIsLoading(false)} /> : null}
    </div>
  )
}


export default App