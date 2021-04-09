// * variabel de configuracion para Encriptar contraseñas
import { config } from 'dotenv';
config();

const saltRounds = process.env.SALT;

export default saltRounds;
