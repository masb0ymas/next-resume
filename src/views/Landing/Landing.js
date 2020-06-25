/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import cx from 'classnames'
import Typewriter from 'typewriter-effect'
import styles from './Landing.module.scss'
import About from '../../components/layouts/resume/About'
import Skill from '../../components/layouts/resume/Skill'
import Education from '../../components/layouts/resume/Education'

export default function Landing() {
  return (
    <>
      {/* Intro */}
      <section className={cx(styles.hero)}>
        <header className={cx(styles['hero-header'])}>
          <span className={cx(styles['hero-logo'])}>Resume</span>
          <nav>
            <span className={cx(styles['hero-menu-icon'])}>&#8801;</span>
          </nav>
        </header>
        <header>
          <h1 className={cx('text-5xl', 'text-center')}>
            <p className={cx('text-opacity-100')}>Hai, I&apos;m John.</p>
            <Typewriter
              options={{
                strings: ['A Creative Web Designer', 'A Website Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </header>
        <footer className={cx(styles['hero-footer'])}>&nbsp;</footer>
      </section>
      {/* About */}
      <About />
      {/* Skill */}
      <Skill />
      <Education />
    </>
  )
}
