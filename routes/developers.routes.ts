import { Router } from 'express'
import { CreateDevelopersController } from '../src/modules/developers/repositories/useCases/create/CreateDevelopersController'
import { ListDevelopersController } from '../src/modules/developers/repositories/useCases/list/ListDevelopersController'

const levelsRouter = Router()

const createDevelopersController = new CreateDevelopersController()
const listDevelopersController = new ListDevelopersController()

levelsRouter.post('/', createDevelopersController.handle)
levelsRouter.get('/', listDevelopersController.handle)

export default levelsRouter
