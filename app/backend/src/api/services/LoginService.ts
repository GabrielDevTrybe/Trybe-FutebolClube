import { ModelStatic } from 'sequelize';
import { JwtPayload } from 'jsonwebtoken';
import User from '../../database/models/UserModel';
import ILogin from '../interfaces/ILogin';
import ILoginService from '../interfaces/ILoginService';
// import IRole from '../interfaces/IRole';
import decodeToken from '../../utils/JWT';

export default class LoginService implements ILoginService {
  validateToken = (decodeTokenParam: string | null | JwtPayload) => decodeTokenParam;

  protected model: ModelStatic<User> = User;

  async findAll(): Promise<User[]> {
    const users = await this.model.findAll();
    return users;
  }

  async findOne(dto: ILogin): Promise<User | null> {
    const user = await this.model.findOne({ where: { email: dto.email } });
    return user;
  }

  async getRole(token: string): Promise<string | null | JwtPayload> {
    const verify = await this.validateToken(decodeToken.decodeToken(token));
    return verify;
  }
}
