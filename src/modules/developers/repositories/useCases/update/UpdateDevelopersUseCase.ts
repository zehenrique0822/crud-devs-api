import { inject, injectable } from 'tsyringe'
import AppError from '../../../../../errors/AppError'

import type Developers from '../../../../../models/Developers'
import { ILevelsRepository } from '../../../../levels/repositories/ILevelsRepository'
import { type IDeveloperRepositoryDTO, IDevelopersRepository } from '../../IDevelopersRepository'

@injectable()
class UpdateDevelopersUseCase {
  constructor (
    @inject('DevelopersRepository')
    private readonly repository: IDevelopersRepository,
    @inject('LevelsRepository')
    private readonly levelsRepository: ILevelsRepository
  ) {}

  async execute (dto: IDeveloperRepositoryDTO): Promise<Developers | null> {
    const foundDeveloper = await this.repository.findOne({ id: dto.id })

    if (!foundDeveloper) throw new AppError("O desenvolvedor informado não existe!", 400)

    const foundLevel = await this.levelsRepository.findOne({ id: dto.id_level })

    if (!foundLevel) throw new AppError("O nível informado não existe!", 400)

    const updatedDeveloper = await this.repository.update(dto)
    return updatedDeveloper
  }
}

export { UpdateDevelopersUseCase }
