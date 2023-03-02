import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
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
    const result = await this._service.findOne(login);
    if (!result) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const verifyPassword = bcrypt.compareSync(req.body.password, result.password);
    if (!verifyPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    return res.status(200).json({ token });
  }
}

export default LoginController;
