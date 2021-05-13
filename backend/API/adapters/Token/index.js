import TokenInterface from '../../interface/TokenInterface';

export default class TokenAuth extends TokenInterface {
  static #instance;

  constructor(JWTLibrari) {
    super();
    if (TokenAuth.#instance) {
      return TokenAuth.#instance;
    }
    const { jwt, JwtConfig } = JWTLibrari;
    this.JWT = jwt;
    this.JwtConfig = JwtConfig;
    TokenAuth.#instance = this;
  }

  CreateToken = data => {
    return this.JWT.sign(data, this.JwtConfig.secret, { ...this.JwtConfig.header });
  };

  VerifyToken = (token, callback) => {
    const decode = this.JWT.verify(token, this.JwtConfig.secret, function (err, decoded) {
      if (err) {
        /*
      err = {
        name: 'TokenExpiredError',
        message: 'jwt expired',
        expiredAt: 1408621000
      }
    */
        callback();
      }
      return decode;
    });
    return decode;
  };
}
