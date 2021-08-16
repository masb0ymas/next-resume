import useTitleAndError, {
  UseTitleAndErrorProps,
} from '@nexys/fields/useTitleAndError/useTitleAndError'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import { FormikContextType, useField } from 'formik'
import React from 'react'

const { TextArea } = Input

export type FTextAreaProps = TextAreaProps &
  UseTitleAndErrorProps & {
    name: string
    /**
     * Formik Context
     */
    formik?: FormikContextType<any>
  }

function FTextArea(props: FTextAreaProps) {
  const [field] = useField(props as any)
  const [title, error] = useTitleAndError(props)

  return (
    <React.Fragment>
      {title}
      <TextArea {...field} {...props} />
      {error}
    </React.Fragment>
  )
}

export default FTextArea
