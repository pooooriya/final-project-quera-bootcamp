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
