import { useState } from 'react'
import { ReactLenis, useLenis } from "lenis/react";

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/Work'
import Contact from './components/Contact'
import Timeline from './components/Timeline';


function App() {
  const [count, setCount] = useState(0)

  return (
    <ReactLenis root>
      <div>
        <Header />
        <main>
          <Hero />
          <About />
          <Timeline />
          <Skill />
          <Work />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App
