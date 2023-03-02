import User from '../../database/models/UserModel';
import ILogin from './ILogin';

export default interface ILoginService {
  findOne(dto: ILogin): Promise<User | null>,
  findAll(): Promise<User[]>
}
