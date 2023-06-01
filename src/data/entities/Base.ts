export interface BaseEntity {
  id: string
  createdAt: Date | string
  updatedAt: Date | string
  deletedAt?: Date | string | null
}