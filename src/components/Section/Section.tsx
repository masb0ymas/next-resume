import React, { ReactNode } from 'react'
import cx from 'classnames'

interface SectionProps {
  children: ReactNode
  title: string
  subtitle: string
}

function Section(props: SectionProps) {
  const { children, title, subtitle } = props
  return (
    <React.Fragment>
      <section className={cx('text-lg')}>
        <div className={cx('section')}>
          <div className={cx('container mx-auto')}>
            <div className={cx('mb-8')}>
              <p className={cx('text-3xl font-medium mb-8 text-center')}>
                {title}
              </p>
              <p
                className={cx('text-center')}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            </div>
            <div className={cx('grid sm:grid-cols-1 lg:grid-cols-2 gap-6')}>
              {children}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Section
