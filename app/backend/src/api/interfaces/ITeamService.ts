import ITeam from './ITeam';
import TeamModel from '../../database/models/TeamModel';

export default interface ITeamService {
  findAll(dta: ITeam): Promise<TeamModel[]>,
}
