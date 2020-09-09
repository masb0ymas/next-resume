import React from 'react'
import cx from 'classnames'
import SectionAbout from 'components/Section/partials/About'

function About() {
  return (
    <SectionAbout
      title={'About Me'}
      subtitle={'Play with logic, Rewrite, Improve with new technology. '}
    >
      <div className={cx('p-5 rounded-lg my-auto')}>
        <img
          className={cx('rounded-full w-2/5 mx-auto')}
          src="https://avatars2.githubusercontent.com/u/30567103?s=460&u=f86346bbbb9034bbab000b3cc24133c22f8f711b&v=4"
          alt="img example"
        />
      </div>
      <div className={cx('p-5')}>
        <span role="img" aria-label="img">
          Hi, I&apos;m&nbsp;
          <b>Nurul Fajri</b>
          , a Full Stack Developer 🚀 from Indonesia, currently, I&apos;m a
          working on Nusantech.
          <br />
          Beside&apos;s programming, I enjoy eating food and traveling.
          <br />
          I&apos;m still learning to get the best experience.
          <br />
          I like to explore 🏔️ new things related to technology.
          <br />
          I&apos;m love playing with 🐧 penguins and eating 🍏 apples.
        </span>
      </div>
    </SectionAbout>
  )
}

export default About
