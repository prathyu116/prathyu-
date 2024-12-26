import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        < Header />
        <main>
          <Hero />
        </main>
      </div>
       
    </>
  )
}

export default App
