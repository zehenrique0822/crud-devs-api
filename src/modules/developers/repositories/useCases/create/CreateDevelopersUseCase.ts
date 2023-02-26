import { inject, injectable } from 'tsyringe'

import type Developers from '../../../../../models/Developers'
import { type IDeveloperRepositoryDTO, IDevelopersRepository } from '../../IDevelopersRepository'

@injectable()
class CreateDevelopersUseCase {
  constructor (
    @inject('DevelopersRepository')
    private readonly repository: IDevelopersRepository
  ) {}

  async execute (dto: IDeveloperRepositoryDTO): Promise<Developers> {
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
