import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { BASE_API_URL } from '~/core/constants/ConstBaseURL'
import useUrlQuery, {
  UseUrlQueryOptions,
} from '~/core/hooks/useUrlQuery/useUrlQuery'
import { RoleEntity } from '~/data/entities/Role'
import RoleRepository from '~/data/repository/RoleRepository'

type UseResult = {
  data: RoleEntity[]
  total: number
}

type TQueryFnData = UseResult
type TError = AxiosError

// endpoint API
const endpointURL = `${BASE_API_URL}/role?`

function useRole(
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey('/role'),
    () =>
      RoleRepository.api
        .get(urlQuery.transformUrl(endpointURL))
        .then((res) => res.data),
    { ...options }
  )

  return {
    ...query,
    data: query.data?.data ?? [],
    total: query.data?.total ?? 0,
    helpers: urlQuery,
  }
}

export default useRole
