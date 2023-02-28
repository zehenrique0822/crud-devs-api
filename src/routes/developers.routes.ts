import { Router } from 'express'
import { CreateDevelopersController } from '../modules/developers/repositories/useCases/create/CreateDevelopersController'
import { DeleteDevelopersController } from '../modules/developers/repositories/useCases/delete/DeleteDevelopersController'
import { ListDevelopersController } from '../modules/developers/repositories/useCases/list/ListDevelopersController'
import { UpdateDevelopersController } from '../modules/developers/repositories/useCases/update/UpdateDevelopersController'

const developersRouter = Router()

const createDevelopersController = new CreateDevelopersController()
const listDevelopersController = new ListDevelopersController()
const updateDevelopersController = new UpdateDevelopersController()
const deleteDevelopersController = new DeleteDevelopersController()

developersRouter.post('/new', createDevelopersController.handle)
developersRouter.get('/', listDevelopersController.handle)
developersRouter.put('/edit/:id', updateDevelopersController.handle)
developersRouter.delete('/delete/:id', deleteDevelopersController.handle)

export default developersRouter
