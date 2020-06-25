import React from 'react'
import cx from 'classnames'
import styles from '../../../views/Landing/Landing.module.scss'

function Education() {
  return (
    <section className={cx(styles.section)}>
      <div className={cx('container', 'mx-auto')}>
        <div className={cx('mb-8')}>
          <p className={cx('text-3xl font-medium mb-8 text-center')}>
            Education & Experience
          </p>
          <p className={cx('text-center')}>
            It is a long established fact that a reader will be distracted by
            the readable
            <br />
            content of a page when looking at its layout
          </p>
        </div>
        <div
          className={cx('grid', 'sm:grid-cols-1', 'lg:grid-cols-2', 'gap-4')}
        >
          <div
            className={cx(
              'min-w-ful',
              'rounded-lg',
              'overflow-hidden',
              'shadow-lg',
              'bg-white',
            )}
          >
            <div className={cx('px-8 py-8')}>
              <span className={cx('text-gray-600')}>Maret 2013 - 2017</span>
              <h4 className={cx('text-2xl font-medium py-2')}>
                Computer Sience
              </h4>
              <span className={cx('text-gray-600')}>
                Universitas Putra Indonesia &quot;YPTK&quot; Padang
              </span>
              <p className={cx('py-2')}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incidiei dunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam quis nostrud.
              </p>
            </div>
          </div>

          <div
            className={cx(
              'min-w-ful',
              'rounded-lg',
              'overflow-hidden',
              'shadow-lg',
              'bg-white',
            )}
          >
            <div className={cx('px-8 py-8')}>
              <span className={cx('text-gray-600')}>
                Oktober 2017 - Present
              </span>
              <h4 className={cx('text-2xl font-medium py-2')}>
                Minang IT Camp
              </h4>
              <span className={cx('text-gray-600')}>Komunitas Programming</span>
              <p className={cx('py-2')}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incidiei dunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam quis nostrud.
              </p>
            </div>
          </div>
          <div />

          <div
            className={cx(
              'min-w-ful',
              'rounded-lg',
              'overflow-hidden',
              'shadow-lg',
              'bg-white',
            )}
          >
            <div className={cx('px-8 py-8')}>
              <span className={cx('text-gray-600')}>Juni 2019 - Present</span>
              <h4 className={cx('text-2xl font-medium py-2')}>Nusantech</h4>
              <span className={cx('text-gray-600')}>
                Software Enginner ( Full time )
              </span>
              <p className={cx('py-2')}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incidiei dunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam quis nostrud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
