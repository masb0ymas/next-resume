import useUrlQuery, {
  UseUrlQueryOptions,
} from '@nexys/hooks/useUrlQuery/useUrlQuery'
import { AxiosError } from 'axios'
import { BASE_API_URL } from 'constant'
import { UseRoleData } from 'data/useRole'
import { useQuery, UseQueryOptions } from 'react-query'
import ApiCall from 'services/ApiCall'

type UseRoleResult = UseRoleData

type TQueryFnData = UseRoleResult
type TError = AxiosError

function useRoleById(
  id: any,
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>,
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey(['/role-by-id', id]),
    () => ApiCall.api.get(urlQuery.transformUrl(`${BASE_API_URL}/role/${id}`)),
    {
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      select: (res: any) => res?.data?.data,
      enabled: Boolean(id),
      ...options,
    },
  )

  return {
    ...query,
    helper: urlQuery,
  }
}

export default useRoleById
