import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'BkTnT7YL6Qfd1zQtVPRV',
  database: process.env.MYSQLDATABASE || 'TRYBE_FUTEBOL_CLUBE',
  host: process.env.MYSQLHOST || 'containers-us-west-12.railway.app',
  port: Number(process.env.MYSQLPORT) || 6747,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;

