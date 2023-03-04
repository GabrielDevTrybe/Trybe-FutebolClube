import { Request, Response } from 'express';
import IMatchService from '../interfaces/IMatchService';

export default class MatchController {
  private _service: IMatchService;

  constructor(service: IMatchService) {
    this._service = service;
  }

  async findAll(req: Request, res: Response) {
    const result = await this._service.findAll();
    const { inProgress } = req.query;
    if (inProgress) {
      const matches = result
        .filter((match) => match.dataValues.inProgress.toString() === inProgress);
      return res.status(200).json(matches);
    }
    return res.status(200).json(result);
  }

  async finishMath(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.finishMath(id);

    return res.status(200).json({ message: 'Finished' });
  }

  async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    await this._service.updateMatch(id, homeTeamGoals, awayTeamGoals);

    return res.status(200).json({ message: 'Updated' });
  }

  async createMatch(req: Request, res: Response) {
    const {
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
    } = req.body;

    const result = await this._service.createMatch(
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
    );
    return res.status(201).json(result);
  }
}
