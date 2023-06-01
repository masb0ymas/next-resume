import * as yup from 'yup'

const login = yup
  .object({
    email: yup.string().email('invalid email').required('email is required'),
    password: yup.string().required('password is required'),
  })
  .required()

const authSchema = { login }

export default authSchema
