import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { BASE_API_URL } from "~/core/constants/ConstBaseURL"
import useUrlQuery, { UseUrlQueryOptions } from "~/core/hooks/useUrlQuery/useUrlQuery"
import { RoleEntity } from "~/data/entities/Role"
import RoleRepository from "~/data/repository/RoleRepository"

type UseResult = RoleEntity

type TQueryFnData = UseResult
type TError = AxiosError

// endpoint API
const endpointURL = `${BASE_API_URL}/role`

function useRoleById(
  id: string,
  urlOptions?: UseUrlQueryOptions,
  options?: UseQueryOptions<TQueryFnData, TError>
) {
  const urlQuery = useUrlQuery(urlOptions)
  const query = useQuery<TQueryFnData, TError>(
    urlQuery.transformKey(['/role-by-id', id]),
    () =>
      RoleRepository.api
        .get(urlQuery.transformUrl(`${endpointURL}/${id}`))
        .then((res) => res.data),
    {
      // refetchOnMount: false,
      // refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      select: (res: any) => res?.data,
      enabled: Boolean(id),
      ...options,
    }
  )

  return {
    ...query,
    helper: urlQuery,
  }
}

export default useRoleById
