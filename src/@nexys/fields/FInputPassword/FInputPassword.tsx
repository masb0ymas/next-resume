import useTitleAndError, {
  UseTitleAndErrorProps,
} from '@nexys/fields/useTitleAndError/useTitleAndError'
import { Input } from 'antd'
import { PasswordProps } from 'antd/lib/input'
import { FormikContextType, useField } from 'formik'
import React from 'react'

export type FInputPasswordProps = PasswordProps &
  UseTitleAndErrorProps & {
    name: string
    /**
     * Formik Context
     */
    formik?: FormikContextType<any>
  }

function FInputPassword(props: FInputPasswordProps) {
  const [field] = useField(props as any)
  const [title, error] = useTitleAndError(props)

  return (
    <React.Fragment>
      {title}
      <Input.Password {...field} {...props} />
      {error}
    </React.Fragment>
  )
}

export default FInputPassword
