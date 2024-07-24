import express from 'express';

import { validate } from './middlewares/validate';
import { createOngController } from './middlewares/createOng';
import { getOngs } from './middlewares/get_ong';
import * as authSchemas from './schemas/auth';
import * as authController from './controllers/auth';

const routes = express.Router();

routes.get('/', (req, res) => res.json({ ok: false }));

routes.post('/signin', validate(authSchemas.signIn), authController.signIn);
routes.post('/signup', validate(authSchemas.signUp), authController.signUp);

routes.get('/getOngs', getOngs, (req, res) => {
res.json(res.locals.ongs);
});

routes.post('/createOng', createOngController);

export default routes;
