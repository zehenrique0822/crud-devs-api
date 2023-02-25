import { inject, injectable } from 'tsyringe'
import AppError from '../../../../../errors/AppError'

import type Levels from '../../../../../models/Levels'
import { ILevelsRepository } from '../../ILevelsRepository'

@injectable()
class CreateLevelUseCase {
  constructor (
    @inject('LevelsRepository')
    private readonly levelsRepository: ILevelsRepository
  ) {}

  async execute (level: string): Promise<Levels> {
    const foundLevel = await this.levelsRepository.findOne(level)

    if (foundLevel) throw new AppError('Nível já cadastrado!', 400)

    const createdLevel = await this.levelsRepository.create(level)

    return createdLevel
  }
}

export { CreateLevelUseCase }
