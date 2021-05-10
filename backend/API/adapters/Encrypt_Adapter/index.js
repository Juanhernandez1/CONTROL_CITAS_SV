import EncryptInterface from '../../interface/EncryptInterface';

export default class EncryptPassword extends EncryptInterface {
  static #instance;

  constructor(Encrypt) {
    super();
    if (EncryptPassword.#instance) {
      return EncryptPassword.#instance;
    }
    EncryptPassword.#instance = this;
    this.encrypter = Encrypt.bcrypt;
    this.salt = Encrypt.salt;
  }

  ComparePassword = (hashPassword, password) => {
    const valid = this.encrypter.compareSync(password, hashPassword);
    return valid;
  };

  EncryptUserPassword = password => {
    const hash = this.encrypter.hashSync(password, this.salt);
    return hash;
  };
}
