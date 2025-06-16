import React from 'react'
import './App.css'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import AppShowcase from './sections/ShowcaseSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactParticles from './sections/Contact/ContactParticles'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <AppShowcase/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Testimonials/>
      <Contact/>
      <ContactParticles/>
      <Footer/>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App