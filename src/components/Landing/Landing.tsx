import React from 'react'
import Summary from '../Summary/Summary'
import Projects from './Projects'
import Services from './Services'
import Skills from './Skills'
import Experience from '../Experience/Experience'
import Curious from './Curious'
import AboutMe from './AboutMe'
import Header from '../Header/Header'
import ContactMe from '../ContactMe/ContactMe'



const Landing = () => {
    return (
        <>
            <Header />
            <Summary />
            <Projects />
            <Skills />
            <Experience />
            <Services />
            <AboutMe />
            <ContactMe />
        </>
    )
}

export default Landing
