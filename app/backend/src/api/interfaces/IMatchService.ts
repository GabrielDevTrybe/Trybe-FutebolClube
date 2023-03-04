import Math from '../../database/models/MatchModel';

export default interface IMathService {
  findAll(): Promise<Math[]>
  finishMath(id: string): void
  updateMatch(id: string, homeTeamGoals: number, awayTeamGoals: number): void
}
