import { BaseEntity } from './Base'
import { RoleEntity } from './Role'
import { UploadEntity } from './Upload'

export interface UserEntity extends BaseEntity {
  fullname: string
  email: string
  password?: string | null
  phone?: string | null
  tokenVerify?: string | null
  isActive?: boolean
  isBlocked?: boolean
  UploadId?: string | null
  Upload?: UploadEntity | null
  RoleId: string
  Role: RoleEntity
}

export type LoginAttributes = Pick<UserEntity, 'email' | 'password'>

export type UserAttributes = Omit<
  UserEntity,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
>

export const defaultUserData = {
  id: null,
  fullname: null,
  email: null,
  password: null,
  phone: null,
  tokenVerify: null,
  isActive: false,
  isBlocked: false,
  UploadId: null,
  RoleId: null,
  createdAt: null,
  updatedAt: null,
  deletedAt: null,
}
