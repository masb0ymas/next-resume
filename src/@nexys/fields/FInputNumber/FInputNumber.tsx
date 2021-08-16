import useTitleAndError, {
  UseTitleAndErrorProps,
} from '@nexys/fields/useTitleAndError/useTitleAndError'
import { InputNumber } from 'antd'
import { InputNumberProps } from 'antd/lib/input-number'
import { FormikContextType, useField } from 'formik'
import React from 'react'

export type FInputNumberProps = InputNumberProps &
  UseTitleAndErrorProps & {
    name: string
    /**
     * Formik Context
     */
    formik?: FormikContextType<any>
  }

function FInputNumber(props: FInputNumberProps) {
  const [field, , helpers] = useField(props as any)
  const [title, error] = useTitleAndError(props)

  return (
    <React.Fragment>
      {title}
      <InputNumber
        {...field}
        min={0}
        onBlur={() => {
          helpers.setTouched(true)
        }}
        onChange={(value) => {
          helpers.setValue(value)
        }}
        parser={(value) => {
          const [result] = value.match(/[0-9]*/)
          return result
        }}
        style={{ width: '100%' }}
        {...props}
      />
      {error}
    </React.Fragment>
  )
}

export default FInputNumber
