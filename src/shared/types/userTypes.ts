interface IUser {
  telegramId: number | null;
  firstName: string;
  photoUrl: string | null;
  username: string | null;
}

interface IResponseAuth {
  accessToken: string | null;
  profile: IUser | null;
}

interface IUserState extends IResponseAuth {
  isAuthorized: boolean;
}
export type { IUser, IResponseAuth, IUserState };
