import { IDefaultResponse } from 'api/default';

export type GetLunPhInfoResponse = Omit<IDefaultResponse, 'data'> & {
  data: LunaPhaseInfo[];
};

export type LunaPhaseInfo = {
  solMonth: string;
  solYear: string;
  lunAge: number;
  solDay: string;
  solWeek: string;
};
