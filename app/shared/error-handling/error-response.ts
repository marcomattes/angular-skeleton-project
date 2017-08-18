export class ErrorResponse extends Error {
  static readonly BAD_REQUEST = 'BAD_REQUEST';

  status: string;
  error: string;
  message: string;
}
