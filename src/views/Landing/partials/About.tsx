import Text from '@nexys/components/Typography/Text'
import Title from '@nexys/components/Typography/Title'
import { Divider } from 'antd'
import React from 'react'

function About() {
  return (
    <React.Fragment>
      <Title color="#269e9a">{`About Me`}</Title>

      <Divider />

      <Text size={16}>
        {`Hi, I'm  Nurul Fajri , a Full Stack Developer 🚀 from Indonesia, currently, I'm a working on Karcisbola.
Beside's programming, I enjoy eating food and traveling.
I'm still learning to get the best experience.
I like to explore 🏔️ new things related to technology.
I'm love playing with 🐧 penguins and eating 🍏 apples.`}
      </Text>
    </React.Fragment>
  )
}

export default About
