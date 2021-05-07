// * objeto de configuracion para jwt
import { config } from 'dotenv';
config();
const JwtConfig = {
  secret: process.env.SECRET,
  port: process.env.PORT || 3000,
  header: {
    alg: 'HS256',
    typ: 'JWT'
  }
};
export default JwtConfig;