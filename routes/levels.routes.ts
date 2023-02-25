import { Router } from 'express'
import { CreateLevelsController } from '../src/modules/levels/repositories/useCases/create/CreateLevelsController'

const levelsRouter = Router()

const createLevelsController = new CreateLevelsController()

levelsRouter.post('/', createLevelsController.handle)

export default levelsRouter
