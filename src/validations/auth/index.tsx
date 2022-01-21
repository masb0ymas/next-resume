import * as yup from 'yup'

const validation = yup.object().shape({
  email: yup.string().email('invalid email').required('email is required'),
  password: yup.string().required('password is required'),
})

const loginSchema = { validation }

export default loginSchema
