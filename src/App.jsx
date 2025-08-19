import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Footer from './components/footer/footer.jsx'
import Title from './components/title/title.jsx'
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
      <div className="container">
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contacts />
      </div>  
      <Footer />
    </div>
  )
}

export default App
