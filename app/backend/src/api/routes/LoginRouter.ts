import { Request, Response, Router } from 'express';
import LoginService from '../services/LoginService';
import LoginController from '../controllers/LoginController';

const loginRouter = Router();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

loginRouter.post('/login', (req: Request, res: Response) => loginController.create(req, res));
loginRouter.get('/login', (req: Request, res: Response) => loginController.findAll(req, res));

export default loginRouter;