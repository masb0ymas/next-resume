import * as yup from 'yup'

const create = yup.object().shape({
  fullName: yup.string().required('fullname is required'),
  phone: yup.string().required('phone is required'),
  newPassword: yup
    .string()
    .min(8, 'at least 8 characters')
    .oneOf([yup.ref('confirmNewPassword')], 'passwords are not the same')
    .required('new password is required'),
  confirmNewPassword: yup
    .string()
    .min(8, 'at least 8 characters')
    .oneOf([yup.ref('newPassword')], 'passwords are not the same')
    .required('confirm new password is required'),
  picturePath: yup.string().nullable(),
  email: yup
    .string()
    .email('invalid email')
    .required('email is required'),
  isActive: yup.boolean().nullable(),
  RoleId: yup.string().required('role is required'),
})

const update = yup.object().shape({
  fullName: yup.string().required('fullname is required'),
  email: yup.string().nullable(),
  newPassword: yup.string().nullable(),
  confirmNewPassword: yup.string().nullable(),
  phone: yup.string().nullable(),
  picturePath: yup.string().nullable(),
  isActive: yup.boolean().nullable(),
  RoleId: yup.string().required('role is required'),
})

const userSchema = { create, update }

export default userSchema
