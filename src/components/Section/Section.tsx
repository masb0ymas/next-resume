import React, { ReactNode } from 'react'
import cx from 'classnames'

interface SectionProps {
  children: ReactNode
}

function Section(props: SectionProps) {
  const { children } = props
  return (
    <React.Fragment>
      <section className={cx('text-lg')}>
        <div className={cx('section')}>
          <div className={cx('container mx-auto')}>{children}</div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section
