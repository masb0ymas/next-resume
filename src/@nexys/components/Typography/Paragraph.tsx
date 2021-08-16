import { Typography } from 'antd'
import { ParagraphProps } from 'antd/lib/typography/Paragraph'
import React from 'react'

function Paragraph(props: ParagraphProps) {
  return <Typography.Paragraph {...props} />
}

export default Paragraph
