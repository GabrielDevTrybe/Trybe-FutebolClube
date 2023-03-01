import { sign } from 'jsonwebtoken';
import ILogin from '../api/interfaces/ILogin';

const TOKEN_SECRET = process.env.JWT_SECRET || 'paodequeijo';

const generateToken = (user: ILogin): string => {
  try {
    return sign(
      user,
      TOKEN_SECRET,
      {
        expiresIn: '30d',
        algorithm: 'HS256',
      },
    );
  } catch (error) {
    throw new Error('Falha ao gerar token');
  }
};

export default {
  generateToken,
};
