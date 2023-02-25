import { Router } from 'express'

import levelsRouter from './levels.routes'
const routes = Router()

routes.use('/level', levelsRouter)

export default routes
