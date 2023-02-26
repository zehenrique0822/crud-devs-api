import { inject, injectable } from 'tsyringe'
import AppError from '../../../../../errors/AppError'

import type Levels from '../../../../../models/Levels'
import { ILevelsRepository } from '../../ILevelsRepository'

@injectable()
class CreateLevelsUseCase {
  constructor (
    @inject('LevelsRepository')
    private readonly repository: ILevelsRepository
  ) {}

  async execute (level: string): Promise<Levels> {
    const foundLevel = await this.repository.findOne({ level })

    if (foundLevel) throw new AppError('Nível já cadastrado!', 400)

    const createdLevel = await this.repository.create(level)

    return createdLevel
  }
}

export { CreateLevelsUseCase }
