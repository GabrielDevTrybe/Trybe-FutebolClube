import { Request, Response, Router } from 'express';
import MatchService from '../services/MatchService';
import MatchController from '../controllers/MatchController';
import authValidate from '../middlewares/AuthValidate';
import MathMiddleware from '../middlewares/MathMiddleware';

const matchRouter = Router();
const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchRouter.get('/matches', (req: Request, res: Response) => matchController.findAll(req, res));

matchRouter.patch(
  '/matches/:id/finish',
  authValidate.authValidate,
  (req: Request, res: Response) => matchController.finishMath(req, res),
);

matchRouter.patch(
  '/matches/:id',
  authValidate.authValidate,
  (req: Request, res: Response) => matchController.updateMatch(req, res),
);

matchRouter.post(
  '/matches',
  authValidate.authValidate,
  MathMiddleware.checkAreNotSame,
  (req: Request, res: Response) => matchController.createMatch(req, res),
);

export default matchRouter;
