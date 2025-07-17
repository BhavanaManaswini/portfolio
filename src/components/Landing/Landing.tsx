import React from 'react'
import Summary from './Summary'
import Intro from './Intro'
import Projects from './Projects'
import Services from './Services'
import AboutMe from './AboutMe'
import Skills from './Skills'

const Landing = () => {
    return (
        <>
            <Summary />
            <Intro />
            <Projects />
            <Services />
            <Skills />
            <AboutMe />
        </>
    )
}

export default Landing
