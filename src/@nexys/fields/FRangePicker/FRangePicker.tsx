import useTitleAndError, {
  UseTitleAndErrorProps,
} from '@nexys/fields/useTitleAndError/useTitleAndError'
import { DatePicker } from 'antd'
import { RangePickerProps } from 'antd/lib/date-picker'
import { FormikContextType, useField } from 'formik'
import React from 'react'

const { RangePicker } = DatePicker

export type FRangePickerProps = RangePickerProps &
  UseTitleAndErrorProps & {
    name: string
    /**
     * Formik Context
     */
    formik?: FormikContextType<any>
  }

function FRangePicker(props: FRangePickerProps) {
  const [field, , helpers] = useField(props as any)
  const [title, error] = useTitleAndError(props)

  return (
    <React.Fragment>
      {title}
      <RangePicker
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

export default FRangePicker
