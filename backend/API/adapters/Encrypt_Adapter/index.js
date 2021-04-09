import EncryptInterface from '../../interface/ EncryptInterface';
import { Encrypt } from '../../services';

export default class EncryptPassword extends EncryptInterface {
  static #instance;

  constructor() {
    super();
    if (EncryptPassword.#instance) {
      return EncryptPassword.#instance;
    }
    EncryptPassword.#instance = this;
    this.encrypter = Encrypt.bcrypt;
    this.salt = Encrypt.salt;
  }

  ComparePassword = async (hashPassword, password) => {
    const valid = this.encrypter.compareSync(password, hashPassword);
    return valid;
  };

  EncryptPassword = async password => {
    const hash = await this.encrypter.hashSync(password, this.salt);
    return hash;
  };
}
