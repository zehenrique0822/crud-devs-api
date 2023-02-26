import { container } from 'tsyringe'
import { type IDevelopersRepository } from '../../modules/developers/repositories/IDevelopersRepository'
import { DevelopersRepository } from '../../modules/developers/repositories/implementations/LevelsRepository'
import { type ILevelsRepository } from '../../modules/levels/repositories/ILevelsRepository'
import { LevelsRepository } from '../../modules/levels/repositories/implementations/LevelsRepository'

container.registerSingleton<ILevelsRepository>(
  'LevelsRepository',
  LevelsRepository
)

container.registerSingleton<IDevelopersRepository>(
  'DevelopersRepository',
  DevelopersRepository
)
