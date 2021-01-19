import React from 'react'
import Card from 'components/Card/Card'
import Section from 'components/Section/partials/Education'

function Education() {
  const education = {
    title: 'Computer Science',
    campus: 'Universitas Putra Indonesia YPTK Padang',
    periode: 'Agust 2013 - Mar 2017',
    description: 'I continue my education in computer science, understand how to analyze a problem and find a solution, then this is applied to an application / software. Besides that, we also understand AI in broad outline, not in detail, such as: machine learning, deep learning, and neural networks.'
  }

  return (
    <Section
      title={'Education & Certification'}
      subtitle={`
      Education and certification that I have obtained
      `}
    >
      <React.Fragment>
        <Card
          title={education.title}
          subtitle={education.campus}
          periode={education.periode}
          text={education.description}
        />
      </React.Fragment>
    </Section>
  )
}

export default Education
