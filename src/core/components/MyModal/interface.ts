import { QueryObserverBaseResult, useMutation } from '@tanstack/react-query'
import useUrlQuery from '~/core/hooks/useUrlQuery/useUrlQuery'

type Query = QueryObserverBaseResult & {
  data: any[]
  helpers: ReturnType<typeof useUrlQuery>
  total: number
}

export interface OpenModalEntity {
  query: Query
  mutation: ReturnType<typeof useMutation>
}

export interface OpenSelectedModalEntity extends OpenModalEntity {
  id: string
  title?: string
  labelConfirm?: string
  labelCancel?: string
}

export interface OpenMultiSelectedModalEntity extends OpenModalEntity {
  ids: string[]
  title?: string
  labelConfirm?: string
  labelCancel?: string
}
