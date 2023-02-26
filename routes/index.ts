import { Router } from 'express'

import levelsRouter from './levels.routes'
const routes = Router()

routes.use('/levels', levelsRouter)

export default routes
