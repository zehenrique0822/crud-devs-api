import { Router } from 'express'
import { CreateDevelopersController } from '../src/modules/developers/repositories/useCases/create/CreateDevelopersController'
import { DeleteDevelopersController } from '../src/modules/developers/repositories/useCases/delete/DeleteLevelsController'
import { ListDevelopersController } from '../src/modules/developers/repositories/useCases/list/ListDevelopersController'
import { UpdateDevelopersController } from '../src/modules/developers/repositories/useCases/update/UpdateDevelopersController'

const developersRouter = Router()

const createDevelopersController = new CreateDevelopersController()
const listDevelopersController = new ListDevelopersController()
const updateDevelopersController = new UpdateDevelopersController()
const deleteDevelopersController = new DeleteDevelopersController()

developersRouter.post('/', createDevelopersController.handle)
developersRouter.get('/', listDevelopersController.handle)
developersRouter.put('/:id', updateDevelopersController.handle)
developersRouter.delete('/:id', deleteDevelopersController.handle)

export default developersRouter
