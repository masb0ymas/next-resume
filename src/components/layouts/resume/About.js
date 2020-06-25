import React from 'react'
import cx from 'classnames'
import styles from '../../../views/Landing/Landing.module.scss'

function About() {
  return (
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
            <p className={cx('text-3xl font-medium mb-8')}>About Me</p>
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
  )
}

export default About
