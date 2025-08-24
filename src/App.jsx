import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Footer from './components/footer/footer.jsx'
import Contacts from './components/contacts/contacts.jsx'
import About from "./components/about/about.jsx"
import Features from "./components/features/features.jsx";
import Download from "./components/download/download.jsx";
const App = () => {
  return (
    <div>
      <Navbar />  
      <Hero />
      <About/>
      <Features/>
      <Download/> 
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
