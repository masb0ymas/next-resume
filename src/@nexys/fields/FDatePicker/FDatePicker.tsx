import useTitleAndError, {
  UseTitleAndErrorProps,
} from '@nexys/fields/useTitleAndError/useTitleAndError'
import { DatePicker } from 'antd'
import { DatePickerProps } from 'antd/lib/date-picker'
import { FormikContextType, useField } from 'formik'
import React from 'react'

export type FDatePickerProps = DatePickerProps &
  UseTitleAndErrorProps & {
    name: string
    /**
     * Formik Context
     */
    formik?: FormikContextType<any>
  }

function FDatePicker(props: FDatePickerProps) {
  const [field, , helpers] = useField(props as any)
  const [title, error] = useTitleAndError(props)

  return (
    <React.Fragment>
      {title}
      <DatePicker
        {...field}
        onBlur={() => {
          helpers.setTouched(true)
        }}
        onChange={(value) => {
          helpers.setValue(value)
        }}
        onOk={(value) => {
          helpers.setValue(value)
        }}
        {...props}
      />
      {error}
    </React.Fragment>
  )
}

export default FDatePicker
