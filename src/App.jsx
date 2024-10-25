import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Hero, Navbar, Tech, Works, Social } from './components'


const App = () => {
  
  return (
    <BrowserRouter>
      <div className=" relative  z-0 bg-main">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
            <Contact />
        </div>
        <Social />
      </div>
    </BrowserRouter>
  )
}

export default App