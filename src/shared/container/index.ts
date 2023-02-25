import { container } from 'tsyringe'
import { type ILevelsRepository } from '../../modules/levels/repositories/ILevelsRepository'
import { LevelsRepository } from '../../modules/levels/repositories/implementations/LevelsRepository'

container.registerSingleton<ILevelsRepository>(
  'LevelsRepository',
  LevelsRepository
)
