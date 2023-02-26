import { Router } from 'express'
import { CreateLevelsController } from '../src/modules/levels/repositories/useCases/create/CreateLevelsController'
import { ListLevelsController } from '../src/modules/levels/repositories/useCases/list/ListLevelsController'
import { UpdateLevelsController } from '../src/modules/levels/repositories/useCases/update/UpdateLevelsController'

const levelsRouter = Router()

const createLevelsController = new CreateLevelsController()
const listLevelsController = new ListLevelsController()
const updateLevelsController = new UpdateLevelsController()

levelsRouter.post('/', createLevelsController.handle)
levelsRouter.get('/', listLevelsController.handle)
levelsRouter.put('/:id', updateLevelsController.handle)

export default levelsRouter
