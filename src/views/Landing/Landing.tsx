import React from 'react'
import About from 'views/Landing/partials/About'
import Skill from 'views/Landing/partials/Skill'
import Education from 'views/Landing/partials/Education'

function Landing() {
  return (
    <React.Fragment>
      <About />
      <Skill />
      <Education />
    </React.Fragment>
  )
}

export default Landing
