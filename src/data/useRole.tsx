import useUrlQuery, {
  UseUrlQueryOptions,
} from '@nexys/hooks/useUrlQuery/useUrlQuery'
import { AxiosError } from 'axios'
import { BASE_API_URL } from 'constant'
import { useQuery, UseQueryOptions } from 'react-query'
import ApiCall from 'services/ApiCall'

export interface UseRoleData {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

type UseRoleResult = {
  data: UseRoleData[]
  total: number
}

type TQueryFnData = UseRoleResult
type TError = AxiosError

function useRole(
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>,
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey('/role'),
    () =>
      ApiCall.api
        .get(urlQuery.transformUrl(`${BASE_API_URL}/role?`))
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

export default useRole
