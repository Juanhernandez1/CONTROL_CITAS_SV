// * variabel de configuracion para Encriptar contraseñas
import { config } from 'dotenv';
config();
const saltRounds = parseInt(process.env.SALT, 10);
export default saltRounds;