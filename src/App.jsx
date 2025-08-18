import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import Title from './components/title/title.jsx'
import Footer from './components/footer/footer.jsx'
import Contacts from "./components/contacts/contacts.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className="container">
        <Title subTitle="Contact US" title="Get in Touch" />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App
