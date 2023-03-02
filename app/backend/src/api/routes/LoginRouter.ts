import { Request, Response, Router } from 'express';
import LoginService from '../services/LoginService';
import LoginController from '../controllers/LoginController';
import LoginMiddleware from '../middlewares/LoginMiddleware';
import authValidate from '../middlewares/AuthValidate';

const loginRouter = Router();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

loginRouter.post(
  '/login',
  LoginMiddleware.validatelogin,
  LoginMiddleware.validateEmailAndPassword,
  (req: Request, res: Response) => loginController.findOne(req, res),
);
loginRouter.get('/login', (req: Request, res: Response) => loginController.findAll(req, res));

loginRouter.get(
  '/login/role',
  authValidate.authValidate,
  (req: Request, res: Response) => loginController.getRole(req, res),
);

export default loginRouter;
