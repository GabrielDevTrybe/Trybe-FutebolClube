import TeamModel from '../../database/models/TeamModel'

const teamsMock: TeamModel[] = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  },
  {
    "id": 3,
    "teamName": "Botafogo"
  }
] as TeamModel[];


export {
  teamsMock,
}