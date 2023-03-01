import { NextFunction, Response, Request } from 'express';

const validatelogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  next();
};

const validateEmailAndPassword = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;

  if (!emailRegex.test(email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  if (password.length < 6) {
    return res.status(401).json({
      message: 'Invalid email or password',
    });
  }
  next();
};

export default {
  validatelogin,
  validateEmailAndPassword,

};
