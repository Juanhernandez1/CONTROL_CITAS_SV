import bcrypt from 'bcrypt';
import saltRounds from '../config/BcryptConfig';

const salt = bcrypt.genSaltSync(saltRounds);
const Encrypt = {
  salt,
  bcrypt
};

export default Encrypt;
