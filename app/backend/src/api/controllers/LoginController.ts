import { Request, Response } from 'express';
import ILoginService from '../interfaces/ILoginService';
import JWTtoken from '../../utils/JWT';

class LoginController {
  private _service: ILoginService;

  constructor(service: ILoginService) {
    this._service = service;
  }

  async findAll(req: Request, res: Response) {
    const result = await this._service.findAll();
    return res.status(200).json(result);
  }

  async create(req: Request, res: Response) {
    const login = req.body;
    const token = JWTtoken.generateToken(login);
    await this._service.create(login);
    return res.status(200).json({ token });
  }
}

export default LoginController;
