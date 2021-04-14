// * Archivo raiz de servicios
import { Sequelize } from 'sequelize';
import Encrypt from './bcrypt';
import ConfiguracionDb from './config/ConfiguracionDb';
import MomentSv from './moment';
import ConnectionDb from './sequalize';
import initModels from './sequalize/model';

const Connection = new ConnectionDb(Sequelize, ConfiguracionDb);
const { conexion } = Connection;

const {
  Access,
  Address,
  Appointment,
  Business,
  Contactbusiness,
  Detail,
  Freeday,
  Service,
  Setting,
  User,
  Operations
} = initModels(conexion);

const Model = {
  Access,
  Address,
  Appointment,
  Business,
  Contactbusiness,
  Detail,
  Freeday,
  Service,
  Setting,
  User,
  Operations
};

const services = {
  Model,
  Encrypt,
  MomentSv
};

export default services;
