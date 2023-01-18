export abstract class ErrorType extends Error {
  statusCode?: number;
  isOperational?: boolean;
  type?: string;
  constructor(message: string, statusCode: number) {
    super();
  }
}
