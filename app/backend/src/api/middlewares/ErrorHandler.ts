import { NextFunction, Response, Request } from 'express';
import ErrorStatus from '../error/ErrorStatus';

const ErrorHandler = (
  err: Error & Partial<ErrorStatus>,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => res.status(err._stack || 500).json({ message: err.message || 'Internal error' });

export default ErrorHandler;
