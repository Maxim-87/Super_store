/* eslint-disable */
// -----------------------------------------------Register

import { CommonResponse, ErrorResponse } from 'base/types/provider/response';

export type PostAuthRegisterReq = {
  email: string;
  password: string;
};

export type PostAuthRegisterParams = {} & PostAuthRegisterReq;

export type PostAuthRegisterData = {};

export type PostAuthRegisterResp =
  | ({
      data: PostAuthRegisterData;
    } & CommonResponse)
  | ErrorResponse;
