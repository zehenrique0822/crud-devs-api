import { type Repository } from 'typeorm'
import { AppDataSource } from '../../../../database/index'
import Levels from '../../../../models/Levels'
import { type ILevelsRepository } from '../ILevelsRepository'

class LevelsRepository implements ILevelsRepository {
  private readonly levelsRepository: Repository<Levels>

  constructor () {
    this.levelsRepository = AppDataSource.getRepository(Levels)
  }

  async findOne (level: string): Promise<Levels | null> {
    const foundLevel = await this.levelsRepository.findOne({ where: { level } })
    return foundLevel
  }

  async create (level: string): Promise<Levels> {
    const createdLevel = this.levelsRepository.create({ level })
    await this.levelsRepository.save(createdLevel)
    return createdLevel
  }
}

export { LevelsRepository }
