import { Router } from 'express';
import { lobbyRouter } from './routes/lobby/index';

const routes = Router();

routes.use('/lobby', lobbyRouter);

export { routes as routes }