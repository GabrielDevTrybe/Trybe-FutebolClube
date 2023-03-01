import User from '../../database/models/UserModel';
import ILogin from './ILogin';

export default interface ILoginService {
  create(dto: ILogin): Promise<User>,
  findAll(): Promise<User[]>
}
