import React from 'react'
import Card from 'components/Card/Card'
import Section from 'components/Section/Section'

function Education() {
  return (
    <Section
      title={'Education & Experience'}
      subtitle={`
      It is a long established fact that a reader will be distracted by the readable
      <br />
      content of a page when looking at its layout
      `}
    >
      <React.Fragment>
        <Card
          title={'Computer Sience'}
          subtitle={'Universitas Putra Indonesia YPTK Padang'}
          periode={'Maret 2013 - 2017'}
          text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam quis nostrud.`}
        />

        <Card
          title={'Minang IT Camp'}
          subtitle={'Komunitas Programming'}
          periode={'Oktober 2017 - Present'}
          text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam quis nostrud.`}
        />

        <div />

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

export default Education
