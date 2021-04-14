import { Router } from 'express';
import Versiones from './Versiones';
import controllers from '../controllers';

const Routes = Router();

const objVersion = Versiones(Router, controllers);

const { RutasV1 } = objVersion;
// * ruta de version
Routes.use('/v1', RutasV1);

export default Routes;
