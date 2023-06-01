import * as yup from 'yup'

const create = yup
  .object({
    name: yup.string().required('name is required'),
  })
  .required()

const update = yup
  .object({
    name: yup.string().required('name is required'),
  })
  .required()

const roleSchema = { create, update }

export default roleSchema
