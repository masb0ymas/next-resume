import React from 'react'
import cx from 'classnames'
import Typewriter from 'typewriter-effect'
import styles from './Landing.module.scss'

export default function Landing() {
  return (
    <>
      <section className={cx(styles.section)}>
        <div className={cx('container', 'mx-auto')}>
          <div className={cx('grid', 'sm:grid-cols-1', 'lg:grid-cols-2')}>
            <h1 className={cx('text-4xl')}>
              <p className={cx('text-blue-600 text-opacity-100')}>
                Hai, I&apos;m John.
              </p>
              <Typewriter
                options={{
                  strings: ['A Creative Web Designer', 'A Website Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className={cx('mx-auto')}>
              <img
                className={cx('object-center')}
                src="/img/men.png"
                alt="img example"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
