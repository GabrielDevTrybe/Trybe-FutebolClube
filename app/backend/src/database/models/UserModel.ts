import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class User extends Model {
  // declare <campo>: <tipo>;
  declare readonly id: number;
  declare teamName: string;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  username: {
    allowNull: true,
    type: STRING,
  },

  role: {
    allowNull: true,
    type: STRING,
  },

  email: {
    allowNull: true,
    type: STRING,
  },

  password: {
    allowNull: true,
    type: STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'teams',
});
