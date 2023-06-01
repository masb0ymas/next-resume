import { BaseEntity } from './Base'

export interface UploadEntity extends BaseEntity {
  keyFile: string
  filename: string
  mimetype: string
  size: number
  signedURL: string
  expiryDateURL: Date
  fileUpload?: File
}

export type UploadAttributes = Omit<
  UploadEntity,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
>
