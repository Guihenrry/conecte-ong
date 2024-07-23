import express from 'express'

import { validate } from './middlewares/validate'

import * as authSchemas from './schemas/auth'
import * as authController from './controllers/auth'
import * as ongsController from './controllers/ongs'

const routes = express.Router()

routes.get('/', (req, res) => res.json({ ok: false }))

routes.post('/signin', validate(authSchemas.signIn), authController.signIn)
routes.post('/signup', validate(authSchemas.signUp), authController.signUp)

routes.get('/ongs', ongsController.list)

export default routes
