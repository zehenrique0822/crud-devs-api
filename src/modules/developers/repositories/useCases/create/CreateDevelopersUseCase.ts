import { inject, injectable } from 'tsyringe'
import AppError from '../../../../../errors/AppError'

import type Developers from '../../../../../models/Developers'
import { ILevelsRepository } from '../../../../levels/repositories/ILevelsRepository'
import { type IDeveloperRepositoryDTO, IDevelopersRepository } from '../../IDevelopersRepository'

@injectable()
class CreateDevelopersUseCase {
  constructor (
    @inject('DevelopersRepository')
    private readonly repository: IDevelopersRepository,
    @inject('LevelsRepository')
    private readonly levelsRepository: ILevelsRepository
  ) {}

  async execute (dto: IDeveloperRepositoryDTO): Promise<Developers> {
    const foundLevel = await this.levelsRepository.findOne({ id: dto.id_level })

    if (!foundLevel) throw new AppError("O nível informado não existe!", 400)

    const createdDeveloper = await this.repository.create({
      ...dto,
      name: dto.name.trim(),
      gender: dto.gender.toLowerCase(),
      hobby: dto.hobby.trim()
    })

    return createdDeveloper
  }
}

export { CreateDevelopersUseCase }
