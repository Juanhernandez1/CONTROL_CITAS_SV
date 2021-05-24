// * variabel de configuracion para Encriptar contraseñas
import { config } from 'dotenv';
config();

const saltRounds = 12;

export default saltRounds;
