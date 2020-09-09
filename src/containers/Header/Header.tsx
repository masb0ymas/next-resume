import React from 'react'
import cx from 'classnames'

export default function Nav() {
  return (
    <nav
      className={cx(
        'flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center',
      )}
    >
      <div className={cx('w-full max-w-screen-xl relative mx-auto px-6')}>
        <div className={cx('flex items-center')}>
          <div className={cx('lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8')}>
            Next - Resume
          </div>
          <div className={cx('flex flex-grow lg:w-3/4 xl:w-4/5 justify-end')}>
            <div
              className={cx(
                'hidden lg:flex lg:items-center lg:justify-end xl:w-1/4 px-6',
              )}
            >
              <div
                className={cx('flex justify-end items-center text-gray-500')}
              >
                <a
                  className={cx('flex items-center hover:text-gray-700 mr-5')}
                  href="https://github.com/masb0ymas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={cx('h-6 w-6 rounded-full mx-auto')}
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    alt="logo github"
                  />
                  &nbsp;&nbsp;&nbsp;
                  <div className={cx('relative mr-4')}>masb0ymas</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
