export interface SingleUser {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
  authStrategy: string;
}

export type GetAllUsersResponse = SingleUser[];
export type GetOneUserResponse = SingleUser;
