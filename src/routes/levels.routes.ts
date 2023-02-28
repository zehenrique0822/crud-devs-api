import { Router } from 'express'
import { CreateLevelsController } from '../modules/levels/repositories/useCases/create/CreateLevelsController'
import { DeleteLevelsController } from '../modules/levels/repositories/useCases/delete/DeleteLevelsController'
import { ListLevelsController } from '../modules/levels/repositories/useCases/list/ListLevelsController'
import { UpdateLevelsController } from '../modules/levels/repositories/useCases/update/UpdateLevelsController'

const levelsRouter = Router()

const createLevelsController = new CreateLevelsController()
const listLevelsController = new ListLevelsController()
const updateLevelsController = new UpdateLevelsController()
const deleteLevelsController = new DeleteLevelsController()

levelsRouter.post('/new', createLevelsController.handle)
levelsRouter.get('/', listLevelsController.handle)
levelsRouter.put('/edit/:id', updateLevelsController.handle)
levelsRouter.delete('/delete/:id', deleteLevelsController.handle)

export default levelsRouter
