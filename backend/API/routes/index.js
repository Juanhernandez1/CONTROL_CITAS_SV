import { Router } from 'express';
import Versiones from './Versiones';
import controllers from '../controllers';
import AuthRouter from './Login';

const Routes = Router();

const objVersion = Versiones(Router, controllers);

const { SignUp } = controllers;
const authRouter = AuthRouter(Router, SignUp);

const { RutasV1 } = objVersion;
// * ruta de version
Routes.use('/v1', RutasV1);
// Routes.use('/Auth', authRouter);

const API_RUTES = {
  Routes,
  authRouter
};

export default API_RUTES;
