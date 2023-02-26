import { inject, injectable } from 'tsyringe'
import { Not } from 'typeorm'
import AppError from '../../../../../errors/AppError'

import type Levels from '../../../../../models/Levels'
import { ILevelsRepository } from '../../ILevelsRepository'

@injectable()
class UpdateLevelsUseCase {
  constructor (
    @inject('LevelsRepository')
    private readonly repository: ILevelsRepository
  ) {}

  async execute (id: number, level: string): Promise<Levels | null> {
    const foundLevel = await this.repository.findOne({ id })
    if (!foundLevel) throw new AppError('O nível não foi existe!', 400)

    const foundByLevel = await this.repository.find({
      level,
      id: Not(id)
    })
    if (foundByLevel?.length) throw new AppError('Este nível já está cadastrado!', 400)

    const updatedLevel = await this.repository.update(id, level)
    return updatedLevel
  }
}

export { UpdateLevelsUseCase }
