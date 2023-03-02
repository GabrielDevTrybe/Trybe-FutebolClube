import { ModelStatic } from 'sequelize';
import User from '../../database/models/UserModel';
import ILogin from '../interfaces/ILogin';
import ILoginService from '../interfaces/ILoginService';

export default class LoginService implements ILoginService {
  protected model: ModelStatic<User> = User;

  async findAll(): Promise<User[]> {
    const users = await this.model.findAll();
    return users;
  }

  async findOne(dto: ILogin): Promise<User | null> {
    const user = await this.model.findOne({ where: { email: dto.email } });
    return user;
  }
}
