import React from 'react'
import Card from 'components/Card/Card'
import Section from 'components/Section/partials/Education'

function Education() {
  return (
    <Section
      title={'Education & Certification'}
      subtitle={`
      Education and certification that I have obtained
      `}
    >
      <React.Fragment>
        <Card
          title={'Computer Science'}
          subtitle={'Universitas Putra Indonesia YPTK Padang'}
          periode={'Maret 2013 - 2017'}
          text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
              sed do eiusmod tempor incidiei dunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam quis nostrud.`}
        />
      </React.Fragment>
    </Section>
  )
}

export default Education
