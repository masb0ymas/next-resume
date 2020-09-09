import React, { ReactNode } from 'react'
import cx from 'classnames'

interface SectionProps {
  children: ReactNode
}

function SectionGrey(props: SectionProps) {
  const { children } = props
  return (
    <React.Fragment>
      <section className={cx('text-lg border-gray-100 bg-gray-100')}>
        <div className={cx('section')}>
          <div className={cx('container mx-auto')}>{children}</div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SectionGrey
