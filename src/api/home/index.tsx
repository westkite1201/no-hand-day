import { GetLunPhInfoResponse } from '@api/home/types';
import axiosInstance from '@api/index';

export async function getLunPhInfo(solYear: number, solMonth: number) {
  const response = await axiosInstance.get<GetLunPhInfoResponse>(
    '/api/weather/getLunPhInfo',
    { params: { sol_year: solYear, sol_month: solMonth } },
  );
  return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
}
