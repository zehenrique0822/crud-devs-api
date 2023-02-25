import { type Repository } from 'typeorm'
import { AppDataSource } from '../../../../database/index'
import Levels from '../../../../models/Levels'
import { type ILevelsRepository, type ILevelRepositoryDTO } from '../ILevelsRepository'

class LevelsRepository implements ILevelsRepository {
  private readonly levelsRepository: Repository<Levels>

  constructor () {
    this.levelsRepository = AppDataSource.getRepository(Levels)
  }

  async create (dto: ILevelRepositoryDTO): Promise<Levels> {
    const createdLevel = this.levelsRepository.create({
      level: dto.level
    })

    await this.levelsRepository.save(createdLevel)

    return createdLevel
  }
}

export { LevelsRepository }
