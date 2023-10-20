export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  refresh: string;
  access: string;
  user_id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number?: any;
  thumbnail: string;
}

export interface IRefreshTokenRequest {
  refresh: string;
}

export interface IRefreshTokenResponse {
  access: string;
}

export interface IKudosListResponse {
  id: string;
  createdBy: CreatedBy;
  title: string;
  for: CreatedBy;
  likeCount: number;
  visitCount: number;
}

export interface CreatedBy {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

export interface IUserResponse {
  id: string;
  username: string;
  name: string;
  avatar: string;
}

export interface IAddKudosRequest {
  id: string;
  createdBy: CreatedBy;
  title: string;
  for: CreatedBy;
  likeCount: number;
  visitCount: number;
}
