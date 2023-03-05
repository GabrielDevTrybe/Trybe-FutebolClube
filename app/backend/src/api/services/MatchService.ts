import { ModelStatic, Op } from 'sequelize';
import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
import IMathService from '../interfaces/IMatchService';
import ErrorStatus from '../error/ErrorStatus';

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

  async createMatch(
    homeTeamId: number,
    homeTeamGoals: number,
    awayTeamId: number,
    awayTeamGoals: number,
  ): Promise<Match> {
    const alreadyExist = await Team.findAll({
      where: { id: { [Op.or]: [homeTeamId, awayTeamId] } } });

    if (alreadyExist.length < 2) {
      throw new ErrorStatus(404, 'There is no team with such id!');
    }

    const result = await this.model.create({
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
      inProgress: true,
    });

    return result;
  }
}
