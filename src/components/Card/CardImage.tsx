import React from 'react'
import cx from 'classnames'

interface CardImageProps {
  imageCover: string
  imageLogo: string
  title: string
  subtitle: string
  periode: string
}

function CardImage(props: CardImageProps) {
  const { imageCover, imageLogo, title, subtitle, periode } = props
  return (
    <React.Fragment>
      <article className={cx('bg-white overflow-hidden rounded-lg shadow hover:shadow-xl transition duration-500 ease-in-out')}>
        <a href="/">
          <img
            alt="Placeholder"
            className={cx('block h-auto w-full')}
            src={imageCover}
          />
        </a>

        <header
          className={cx(
            'flex items-center justify-between leading-tight p-2 md:p-4',
          )}
        >
          <h1 className={cx('text-lg')}>
            <a
              className={cx('no-underline hover:underline text-black')}
              href="/"
            >
              {title}
            </a>
          </h1>
        </header>
        <p className={cx('text-gray-600 text-sm px-2 md:px-4')}>{periode}</p>
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
              src={imageLogo}
            />
            <p className={cx('ml-4 text-md')}>{subtitle}</p>
          </a>
        </footer>
      </article>
    </React.Fragment>
  )
}

export default CardImage
