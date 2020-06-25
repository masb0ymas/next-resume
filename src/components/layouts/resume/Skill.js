import React from 'react'
import cx from 'classnames'
import styles from '../../../views/Landing/Landing.module.scss'

function Skill() {
  return (
    <section className={cx(styles.section)}>
      <div className={cx('container', 'mx-auto')}>
        <div className={cx('mb-8')}>
          <p className={cx('text-3xl font-medium mb-8 text-center')}>
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
  )
}

export default Skill
