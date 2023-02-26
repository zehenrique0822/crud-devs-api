import { Router } from 'express'
import { CreateDevelopersController } from '../src/modules/developers/repositories/useCases/create/CreateDevelopersController'
import { ListDevelopersController } from '../src/modules/developers/repositories/useCases/list/ListDevelopersController'
import { UpdateDevelopersController } from '../src/modules/developers/repositories/useCases/update/UpdateDevelopersController'

const levelsRouter = Router()

const createDevelopersController = new CreateDevelopersController()
const listDevelopersController = new ListDevelopersController()
const updateDevelopersController = new UpdateDevelopersController()

levelsRouter.post('/', createDevelopersController.handle)
levelsRouter.get('/', listDevelopersController.handle)
levelsRouter.put('/:id', updateDevelopersController.handle)

export default levelsRouter
