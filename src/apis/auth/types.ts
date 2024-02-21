export type TSignInPayload = {
  phone: string;
  password: string;
  grant_type: 'user' | 'admin';
};

export type TSignInResponse = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  user_kind: number;
  tenant_info: string;
  user_id: number;
  grant_type: string;
  additional_info: string;
  jti: string;
};
