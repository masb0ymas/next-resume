/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import cx from 'classnames'
import Typewriter from 'typewriter-effect'
import styles from './Landing.module.scss'

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
      <section className={cx(styles.section)}>
        <div className={cx('container', 'mx-auto')}>
          <div className={cx('grid', 'sm:grid-cols-1', 'lg:grid-cols-2')}>
            <div className={cx('p-5 rounded-lg my-auto')}>
              <img
                className={cx('rounded-full w-2/5 mx-auto')}
                src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                alt="img example"
              />
            </div>
            <div className={cx('p-5')}>
              <p className={cx('text-3xl font-bold mb-8')}>About Me</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Skill */}
      <section className={cx(styles.section)}>
        <div className={cx('container', 'mx-auto')}>
          <div className={cx('mb-8')}>
            <p className={cx('text-3xl font-bold mb-8 text-center')}>
              My Skills
            </p>
            <p className={cx('text-center')}>
              It is a long established fact that a reader will be distracted by
              the readable
              <br />
              content of a page when looking at its layout
            </p>
          </div>
          <div className={cx('grid', 'sm:grid-cols-1', 'lg:grid-cols-2')}>
            <div className={cx('p-5')}>
              <p className={cx('pb-5')}>Development</p>
              <progress
                className={cx(styles.progress, styles['is-info'])}
                value="45"
                max="100"
              >
                45%
              </progress>
            </div>
            <div className={cx('p-5')}>
              <p className={cx('pb-5')}>Web Design</p>
              <progress
                className={cx(styles.progress, styles['is-info'])}
                value="45"
                max="100"
              >
                45%
              </progress>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
