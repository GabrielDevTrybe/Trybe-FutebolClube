import TeamModel from '../../database/models/TeamModel';

export default interface ITeamService {
  findAll(): Promise<TeamModel[]>,
}
