import BaseError, { ErrorType } from './BaseError';

export default class InternalError extends BaseError {
  constructor({
    status = 500,
    name = 'InternalError',
    message,
    type = 'internal',
    errors = [],
  }: Partial<ErrorType>) {
    super({ message });

    this.name = name;
    this.status = status;
    this.type = type;
    this.errors = errors;
  }
}
