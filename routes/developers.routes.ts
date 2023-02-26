import { Router } from 'express'
import { CreateDevelopersController } from '../src/modules/developers/repositories/useCases/create/CreateDevelopersController'

const levelsRouter = Router()

const createDevelopersController = new CreateDevelopersController()

levelsRouter.post('/', createDevelopersController.handle)

export default levelsRouter
