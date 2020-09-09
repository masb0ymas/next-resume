import React from 'react'
import Card from 'components/Card/Card'
import SectionEducation from 'components/Section/partials/Education'

function Education() {
  return (
    <SectionEducation
      title={'Education & Experience'}
      subtitle={`
      My education and experience started from college until now
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
    </SectionEducation>
  )
}

export default Education
