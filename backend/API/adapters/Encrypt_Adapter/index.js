import EncryptInterface from '../../interface/EncryptInterface';
import crypto from 'crypto';

export default class EncryptPassword extends EncryptInterface {
  static #instance;

  constructor() {
    super();
    if (EncryptPassword.#instance) {
      return EncryptPassword.#instance;
    }
    EncryptPassword.#instance = this;
    this.encrypter = crypto;
  }

  EncryptUserPassword = password => {
    const hash = crypto.createHash('md5').update(password).digest('hex');
    return hash;
  };

  ComparePassword = (password, hash) => {
    if (password === hash) return true;
    else return false;
  };
}
