import React from 'react'
import cx from 'classnames'
import About from 'views/Landing/partials/About'
import Skill from 'views/Landing/partials/Skill'
import Education from 'views/Landing/partials/Education'

function Landing() {
  return (
    <React.Fragment>
      <section className={cx('text-lg')}>
        <div className={cx('section')}>
          <div className={cx('container mx-auto')} />
        </div>
      </section>
      <About />
      <Skill />
      <Education />
    </React.Fragment>
  )
}

export default Landing
