// -----------------------------------------------Register

export type PostAuthRegisterReq = {
  email: string;
  password: string;
};

export type PostAuthRegisterParams = {} & PostAuthRegisterReq;

export type PostAuthRegisterData = {};

export type PostAuthRegisterResp = {
  data: PostAuthRegisterData;
};
