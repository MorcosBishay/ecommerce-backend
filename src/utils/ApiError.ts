export default class ApiError extends Error {
  statusCode: number;
  data: object;
  stack: string | undefined;
  message: string;

  constructor(
    statusCode: number,
    message: string,
    data: object = {},
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    if (stack) this.stack = stack;
    else Error.captureStackTrace(this, this.constructor);
  }
}
