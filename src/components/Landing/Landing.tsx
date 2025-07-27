import React from 'react'
import Summary from './Summary'
import Intro from './Intro'
import Projects from './Projects'
import Services from './Services'
import Skills from './Skills'
import EducationExperience from './EducationExperience'
import Curious from './Curious'
import AboutMe from './AboutMe'

const Landing = () => {
    return (
        <>
            <Summary />
            <Intro />
            <Skills />
            <Projects />
            <Services />
            <AboutMe />
            <Curious />
            <EducationExperience />
        </>
    )
}

export default Landing
