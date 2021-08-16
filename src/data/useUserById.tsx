import useUrlQuery, {
  UseUrlQueryOptions,
} from '@nexys/hooks/useUrlQuery/useUrlQuery'
import { AxiosError } from 'axios'
import { BASE_API_URL } from 'constant'
import { UseUserData } from 'data/useUser'
import { useQuery, UseQueryOptions } from 'react-query'
import ApiCall from 'services/ApiCall'

type UseUserResult = UseUserData

type TQueryFnData = UseUserResult
type TError = AxiosError

function useUserById(
  id: any,
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>,
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey(['/user-by-id', id]),
    () => ApiCall.api.get(urlQuery.transformUrl(`${BASE_API_URL}/user/${id}`)),
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

export default useUserById
