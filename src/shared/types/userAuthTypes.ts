interface RequestDataType {
  data: {
    id: number;
    first_name: string;
    auth_date: number;
    hash: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
  } | null;
  isDataSend?: boolean;
}
export type { RequestDataType };
