import { Request, Response } from 'express';
import ILoginService from '../interfaces/ILoginService';

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
    const result = await this._service.create(req.body);
    console.log(result);
    return res.status(201).json(result);
  }
}

export default LoginController;
