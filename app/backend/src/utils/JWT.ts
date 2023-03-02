import { sign, verify } from 'jsonwebtoken';
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

const decodeToken = (token: string) => {
  if (!token) {
    throw new Error('Token must be a valid token');
  }

  try {
    const result = verify(token, TOKEN_SECRET);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default {
  generateToken,
  decodeToken,
};
