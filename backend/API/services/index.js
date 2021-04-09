// * Archivo raiz de servicios
import { Sequelize } from 'sequelize';
import Encrypt from './Bcrypt';
import DbConfig from './config/ConfiguracionDb';
import firebaseConfig from './config/FirebaseConfig';
import MomentSv from './moment';
import ConnectionDb from './sequalize';
import initModels from './sequalize/model';

const connectionDb = new ConnectionDb(Sequelize, DbConfig);

const Model = initModels(connectionDb);

export default {
  Model,
  Encrypt,
  MomentSv
};
