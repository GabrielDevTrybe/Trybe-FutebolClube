import { NextFunction, Response, Request } from 'express';
import { decodeToken } from '../../utils/JWT';

const authValidate = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const user = decodeToken(authorization);
  if (!user) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  req.body.user = user;

  return next();
};

export default {
  authValidate,
};
