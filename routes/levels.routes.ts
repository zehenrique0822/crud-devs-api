import { Router } from 'express'
import { CreateLevelsController } from '../src/modules/levels/repositories/useCases/create/CreateLevelsController'
import { ListLevelsController } from '../src/modules/levels/repositories/useCases/list/ListLevelsController'

const levelsRouter = Router()

const createLevelsController = new CreateLevelsController()
const listLevelsController = new ListLevelsController()

levelsRouter.post('/', createLevelsController.handle)
levelsRouter.get('/', listLevelsController.handle)

export default levelsRouter
