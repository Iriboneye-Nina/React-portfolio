import React, { useEffect, useState } from 'react'
import Nav from "./Components/Nav";
import Banner from './Components/Banner';
import About from './Components/About'
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },10000)
  }
  
)
  return (
    <>    <div className='bg-slate-900'>
   <Nav/>
   <Banner />
   <About />
   < Services />
   <Projects />
   
   < Contact/>
   <Footer/>
  </div>
  </>

  )
}

export default App

