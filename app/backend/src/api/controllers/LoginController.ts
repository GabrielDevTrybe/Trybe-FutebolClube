import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import ILoginService from '../interfaces/ILoginService';
import { generateToken } from '../../utils/JWT';
// import decodeToken from '../middlewares/AuthValidate';

class LoginController {
  private _service: ILoginService;

  constructor(service: ILoginService) {
    this._service = service;
  }

  async findAll(req: Request, res: Response) {
    const result = await this._service.findAll();
    return res.status(200).json(result);
  }

  async findOne(req: Request, res: Response) {
    const login = req.body;
    const { email } = login;
    const result = await this._service.findOne(login);
    if (!result) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = generateToken({ email, role: result.role });
    const verifyPassword = bcrypt.compareSync(req.body.password, result.password);
    if (!verifyPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    return res.status(200).json({ token });
  }

  async getRole(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const result = await this._service.getRole(authorization);
    console.log(result);

    return res.status(200).json({ role: req.body.user.role });
  }
}

export default LoginController;
