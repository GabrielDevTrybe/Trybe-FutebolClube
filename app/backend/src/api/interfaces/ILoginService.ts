import User from '../../database/models/UserModel';
import ILogin from './ILogin';
// import IRole from './IRole';

export default interface ILoginService {
  findOne(dto: ILogin): Promise<User | null>,
  getRole(token: string): object,
  findAll(): Promise<User[]>
}
