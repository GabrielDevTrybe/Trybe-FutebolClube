import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
import IMathService from '../interfaces/IMatchService';

export default class MatchService implements IMathService {
  protected model: ModelStatic<Match> = Match;

  async findAll(): Promise<Match[]> {
    const match = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return match;
  }

  async finishMath(id: string) {
    await this.model.update({ inProgress: false }, { where: { id } });
  }

  async updateMatch(id: string, homeTeamGoals: number, awayTeamGoals: number) {
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}
