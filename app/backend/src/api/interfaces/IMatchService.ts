import Math from '../../database/models/MatchModel';

export default interface IMathService {
  findAll(): Promise<Math[]>
  finishMath(id: string): void
}
