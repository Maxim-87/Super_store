export type Headers = any;

export interface CommonResponse {
  success: boolean;
  error?: string;
  status: number;
}

export interface ErrorResponse {
  success: false;
  error?: string;
  status: number;
}
