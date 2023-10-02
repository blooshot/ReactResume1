import React from 'react'
import About from './secton/About.js'
import Facts from './secton/Facts.js'
import Skills from './secton/Skills.js'
import Resume from './secton/Resume.js'
import Portfolio from './secton/Portfolio.js'
import Services from './secton/Services.js'
import Testimonials from './secton/Testimonials.js'
import Contact from './secton/Contact.js'



const Main = () => {
    return (
        <main id="main">
            <About />
            <Facts />
            <Skills />
            <Resume />
            <Portfolio />
            <Services />
            <Testimonials />
            <Contact />
        </main>
    )
}

export default Main