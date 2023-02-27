import { Router } from 'express'

import levelsRouter from './levels.routes'
import developersRouter from './developers.routes'
const routes = Router()

routes.use('/levels', levelsRouter)
routes.use('/developers', developersRouter)

export default routes