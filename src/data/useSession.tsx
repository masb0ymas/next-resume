import useUrlQuery, {
  UseUrlQueryOptions,
} from '@nexys/hooks/useUrlQuery/useUrlQuery'
import { AxiosError } from 'axios'
import { BASE_API_URL } from 'constant'
import { useQuery, UseQueryOptions } from 'react-query'
import ApiCall from 'services/ApiCall'

export interface UseSessionData {
  id: string
  UserId: string
  token: string
  ipAddress: string
  device: string
  platform: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

type UseSessionResult = {
  data: UseSessionData[]
  total: number
}

type TQueryFnData = UseSessionResult
type TError = AxiosError

function useSession(
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>,
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey('/session'),
    () =>
      ApiCall.api
        .get(urlQuery.transformUrl(`${BASE_API_URL}/session?`))
        .then((res) => {
          return res.data
        }),
    {
      ...options,
    },
  )

  return {
    ...query,
    data: query.data?.data,
    total: query.data?.total,
    helpers: urlQuery,
  }
}

export default useSession
