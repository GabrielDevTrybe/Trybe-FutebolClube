import { ModelStatic } from 'sequelize';
import ITeamService from '../interfaces/ITeamService';
// import ITeam from '../interfaces/ITeam';
import TeamModel from '../../database/models/TeamModel';

export default class TeamService implements ITeamService {
  protected model: ModelStatic<TeamModel> = TeamModel;

  async findAll(): Promise<TeamModel[]> {
    const teams = await this.model.findAll();
    return teams;
  }
}
