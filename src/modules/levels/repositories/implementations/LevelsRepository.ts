import { type Repository } from 'typeorm'
import { AppDataSource } from '../../../../database/index'
import Levels from '../../../../models/Levels'
import { type IPagination, type ILevelsRepository } from '../ILevelsRepository'

class LevelsRepository implements ILevelsRepository {
  private readonly repository: Repository<Levels>

  constructor () {
    this.repository = AppDataSource.getRepository(Levels)
  }

  async find (
    where: { [key: string]: any },
    relations?: string[],
    order?: { [key: string]: any }
  ): Promise<Levels[] | null> {
    const foundLevels = await this.repository.find({
      where,
      relations,
      order
    })

    return foundLevels
  }

  async findOne (
    where: { [key: string]: any },
    relations?: string[],
    order?: { [key: string]: any }
  ): Promise<Levels | null> {
    const foundLevel = await this.repository.findOne({
      where,
      relations,
      order
    })

    return foundLevel
  }

  async create (level: string): Promise<Levels> {
    const createdLevel = this.repository.create({ level })
    await this.repository.save(createdLevel)
    return createdLevel
  }

  async list (pagination: IPagination): Promise<[Levels[], number]> {
    const query = this.repository.createQueryBuilder('Levels')
      .leftJoinAndSelect("Levels.developers", "developers")

    if (pagination.search) {
      query.where(`LOWER(Levels.level) LIKE '%${pagination.search.toLowerCase()}%'`)
    }

    if (pagination.skip && pagination.limit) {
      query.skip(pagination.skip * pagination.limit).take(pagination.limit)
    }

    query.orderBy('Levels.id', 'ASC')

    const data = await query.getManyAndCount()

    return data
  }

  async update (id: number, level: string): Promise<Levels | null> {
    await this.repository.update(id, { level })
    const updatedLevel = await this.repository.findOne({ where: { id } })
    return updatedLevel
  }
}

export { LevelsRepository }
