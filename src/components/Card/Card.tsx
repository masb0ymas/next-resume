import React from 'react'
import cx from 'classnames'

interface CardProps {
  title: string
  subtitle: string
  periode: string
  text: string
}

function Card(props: CardProps) {
  const { title, subtitle, periode, text } = props
  return (
    <React.Fragment>
      <div
        className={cx(
          'min-w-ful rounded-lg overflow-hidden shadow-lg bg-white',
        )}
      >
        <div className={cx('px-8 py-8')}>
          <span className={cx('text-gray-600')}>{periode}</span>
          <h4 className={cx('text-2xl font-medium py-2')}>{title}</h4>
          <span className={cx('text-gray-600')}>{subtitle}</span>
          <p className={cx('py-2')}>{text}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card
