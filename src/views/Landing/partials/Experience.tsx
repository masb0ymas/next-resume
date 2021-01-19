import React from 'react'
import cx from 'classnames'
import Card from 'components/Card/Card'
import Section from 'components/Section/partials/Experience'

function Experience() {
  const experiences = [
    {
      title: 'Minang IT Camp',
      job: 'Minang Programmer Community',
      periode: 'Okt 2017 - Present',
      description: `I joined this community at the end of 2017. I learned a lot here from versioning with git, learning coding with case studies, and managing a project in the field. And now I manage this community both in terms of websites and participants who want to learn together.`,
    },
    {
      title: 'Nusantech',
      job: 'Web Developer ( Fulltime )',
      periode: 'Jun 2019 - Sep 2020',
      description: `The development of an application using the sprint method, the task that is carried out becomes more neat and directed. I also explore various programming languages. and I build a coding standard that is used in the office, especially for projects and products`,
    },
    {
      title: 'Nusantech',
      job: 'Full Stack Developer ( Fulltime )',
      periode: 'Sep 2020 - Present',
      description: `With the experience I got before, now I maintain open source code, also analyze an application that will be built or developed in the future what it looks like. As well as finding critical solutions when there are major changes`,
    },
  ]

  return (
    <Section
      title={'Experience'}
      subtitle={`
      My experience in both work and community
      `}
    >
      <div className={cx('grid grid-cols-2 gap-6')}>
        {experiences.map((item) => (
          <div className="col-auto">
            <Card
              title={item.title}
              subtitle={item.job}
              periode={item.periode}
              text={item.description}
            />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Experience
