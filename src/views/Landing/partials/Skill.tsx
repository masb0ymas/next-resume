import React from 'react'
import cx from 'classnames'

function Skill() {
  return (
    <section className={cx('text-lg border-gray-100 bg-gray-100')}>
      <div className={cx('section')}>
        <div className={cx('container mx-auto')}>
          <div>
            <p className={cx('text-3xl font-medium mb-8 text-center')}>
              Skill & Portfolio
            </p>
            <p className={cx('text-center')}>
              My skills and experience gained while working on projects and
              products and summarized in a portfolio
            </p>
          </div>

          <div className={cx('my-8 mx-auto')}>
            <ul className="flex items-center justify-center">
              <li className="mr-3">
                <button
                  className="text-center block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
                  type="button"
                >
                  All
                </button>
              </li>
              <li className="mr-3">
                <button
                  className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
                  type="button"
                >
                  Web Design
                </button>
              </li>
              <li className="mr-3">
                <button
                  className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
                  type="button"
                >
                  Frontend
                </button>
              </li>
              <li className="mr-3">
                <button
                  className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
                  type="button"
                >
                  Backend
                </button>
              </li>
              <li className="mr-3">
                <button
                  className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
                  type="button"
                >
                  Mobile Apps
                </button>
              </li>
              <li className="mr-3">
                <button
                  className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 bg-white hover:bg-gray-200 py-1 px-3"
                  type="button"
                >
                  Other
                </button>
              </li>
            </ul>

            <div className={cx('flex flex-wrap -mx-1 lg:-mx-4 my-6')}>
              <div
                className={cx(
                  'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3',
                )}
              >
                <article
                  className={cx(
                    'bg-white overflow-hidden rounded-lg shadow-lg',
                  )}
                >
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className={cx('block h-auto w-full')}
                      src="https://picsum.photos/600/400/?random"
                    />
                  </a>

                  <header
                    className={cx(
                      'flex items-center justify-between leading-tight p-2 md:p-4',
                    )}
                  >
                    <h1 className={cx('text-lg')}>
                      <a
                        className={cx(
                          'no-underline hover:underline text-black',
                        )}
                        href="/"
                      >
                        Project Title
                      </a>
                    </h1>
                    <p className={cx('text-grey-darker text-sm')}>11/1/19</p>
                  </header>

                  <footer
                    className={cx(
                      'flex items-center justify-between leading-none p-2 md:p-4',
                    )}
                  >
                    <a
                      className={cx(
                        'flex items-center no-underline hover:underline text-black',
                      )}
                      href="/"
                    >
                      <img
                        alt="Placeholder"
                        className={cx('block h-auto w-10 rounded-full')}
                        src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                      />
                      <p className={cx('ml-4 text-md')}>Project</p>
                    </a>
                  </footer>
                </article>
              </div>

              <div
                className={cx(
                  'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3',
                )}
              >
                <article
                  className={cx(
                    'bg-white overflow-hidden rounded-lg shadow-lg',
                  )}
                >
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className={cx('block h-auto w-full')}
                      src="https://picsum.photos/600/400/?random"
                    />
                  </a>

                  <header
                    className={cx(
                      'flex items-center justify-between leading-tight p-2 md:p-4',
                    )}
                  >
                    <h1 className={cx('text-lg')}>
                      <a
                        className={cx(
                          'no-underline hover:underline text-black',
                        )}
                        href="/"
                      >
                        Project Title
                      </a>
                    </h1>
                    <p className={cx('text-grey-darker text-sm')}>11/1/19</p>
                  </header>

                  <footer
                    className={cx(
                      'flex items-center justify-between leading-none p-2 md:p-4',
                    )}
                  >
                    <a
                      className={cx(
                        'flex items-center no-underline hover:underline text-black',
                      )}
                      href="/"
                    >
                      <img
                        alt="Placeholder"
                        className={cx('block h-auto w-10 rounded-full')}
                        src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                      />
                      <p className={cx('ml-4 text-md')}>Project</p>
                    </a>
                  </footer>
                </article>
              </div>

              <div
                className={cx(
                  'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3',
                )}
              >
                <article
                  className={cx(
                    'bg-white overflow-hidden rounded-lg shadow-lg',
                  )}
                >
                  <a href="/">
                    <img
                      alt="Placeholder"
                      className={cx('block h-auto w-full')}
                      src="https://picsum.photos/600/400/?random"
                    />
                  </a>

                  <header
                    className={cx(
                      'flex items-center justify-between leading-tight p-2 md:p-4',
                    )}
                  >
                    <h1 className={cx('text-lg')}>
                      <a
                        className={cx(
                          'no-underline hover:underline text-black',
                        )}
                        href="/"
                      >
                        Project Title
                      </a>
                    </h1>
                    <p className={cx('text-grey-darker text-sm')}>11/1/19</p>
                  </header>

                  <footer
                    className={cx(
                      'flex items-center justify-between leading-none p-2 md:p-4',
                    )}
                  >
                    <a
                      className={cx(
                        'flex items-center no-underline hover:underline text-black',
                      )}
                      href="/"
                    >
                      <img
                        alt="Placeholder"
                        className={cx('block h-auto w-10 rounded-full')}
                        src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                      />
                      <p className={cx('ml-4 text-md')}>Project</p>
                    </a>
                  </footer>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
