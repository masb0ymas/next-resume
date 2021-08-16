import Text from '@nexys/components/Typography/Text'
import React from 'react'

interface MyNoteProps {
  text: string
}

function MyNote(props: MyNoteProps) {
  const { text } = props

  return (
    <div style={{ marginTop: '10px' }}>
      <Text color={'red'}>Note :</Text>
      <br />
      <Text color={'red'}>{text}</Text>
    </div>
  )
}

export default MyNote
