import Match from '../../database/models/MatchModel';

export default interface IServiceLeaderboard {
  homeTeamsPerformace(): Promise<Match[]>;
  awayTeamsPerformace(): Promise<Match[]>;

}
