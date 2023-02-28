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

  async findById(id: number): Promise<TeamModel> {
    const team = await this.model.findByPk(id);
    if (!team) {
      throw new Error('invalid ID');
    }
    return team;
  }
}
