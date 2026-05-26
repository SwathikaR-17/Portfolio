import { useState } from 'react'
import Hero from './components/hero/Hero'
import Preloader from './components/preloader/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-svh bg-[var(--color-void)]">
      <Hero />
      {isLoading ? <Preloader onComplete={() => setIsLoading(false)} /> : null}
    </div>
  )
}

export default App
