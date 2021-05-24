// * objeto de configuracion para jwt
import { config } from 'dotenv';
config();

const JwtConfig = {
  secret: process.env.SECRET,
  header: {
    algorithm: 'HS256',
    expiresIn: 86400
  }
};

export default JwtConfig;
