import React, { ReactNode } from 'react'
import cx from 'classnames'
import Section from 'components/Section/Section'

interface AboutProps {
  children: ReactNode
  title: string
  subtitle: string
}

function About(props: AboutProps) {
  const { children, title, subtitle } = props
  return (
    <Section>
      <div className={cx('mb-8')}>
        <p className={cx('text-3xl font-medium mb-8 text-center')}>{title}</p>
        <p
          className={cx('text-center')}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      </div>
      <div className={cx('grid sm:grid-cols-1 lg:grid-cols-2 gap-6')}>
        {children}
      </div>
    </Section>
  )
}

export default About
