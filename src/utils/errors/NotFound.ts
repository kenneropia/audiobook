import { ErrorType } from "../types";

class NotFound extends ErrorType {
  constructor(message = 'Document wasn"t found') {
    super(message, 404);
    Error.captureStackTrace(this, this.constructor);
    this.message = message;
    this.name = this.constructor.name;
    this.statusCode = 404;
    this.isOperational = true;
    this.type = "NotFound";
  }
}

export default NotFound;
