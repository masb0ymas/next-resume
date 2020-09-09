import React from 'react'
import Card from 'components/Card/Card'
import Section from 'components/Section/partials/Experience'

function Experience() {
  return (
    <Section
      title={'Experience'}
      subtitle={`
      My experience in both work and community
      `}
    >
      <React.Fragment>
        <Card
          title={'Minang IT Camp'}
          subtitle={'Minang Programmer Community'}
          periode={'Oktober 2017 - Present'}
          text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam quis nostrud.`}
        />

        <Card
          title={'Nusantech'}
          subtitle={'Software Enginner ( Full time )'}
          periode={'Juni 2019 - Present'}
          text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam quis nostrud.`}
        />
      </React.Fragment>
    </Section>
  )
}

export default Experience
