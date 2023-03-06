import { Request, Response } from 'express';
import ILeaderboardService from '../interfaces/ILeaderboardService';

export default class LeaderboardController {
  private _service: ILeaderboardService;

  constructor(service: ILeaderboardService) {
    this._service = service;
  }

  async homeTeam(_req: Request, res: Response) {
    const result = await this._service.homeTeamsPerformace();
    return res.status(200).json(result);
  }

  async awayTeam(_req: Request, res: Response) {
    const result = await this._service.awayTeamsPerformace();
    return res.status(200).json(result);
  }
}
