import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { queryKeys } from '@constants/queryKeys';
import { getLunPhInfo } from '@api/home';
import { GetLunPhInfoResponse } from '@api/home/types';

export function useGetLunPhInfo(
  solYear: number,
  solMonth: number,
  options?: UseQueryOptions<
    GetLunPhInfoResponse,
    AxiosError,
    GetLunPhInfoResponse,
    (string | number)[]
  >,
) {
  const queryKey = queryKeys.getLunPhInfo(solYear, solMonth);

  return useQuery(queryKey, () => getLunPhInfo(solYear, solMonth), options);
}
