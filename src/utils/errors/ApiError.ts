import { ErrorType } from "../types";

class ApiError extends ErrorType {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);

    this.statusCode = statusCode;
    // this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ApiError;
