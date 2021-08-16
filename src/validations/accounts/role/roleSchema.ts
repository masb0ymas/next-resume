import * as yup from 'yup'

const create = yup.object().shape({
  name: yup.string().required('name is required'),
})

const update = yup.object().shape({
  name: yup.string().required('name is required'),
})

const roleSchema = { create, update }

export default roleSchema
