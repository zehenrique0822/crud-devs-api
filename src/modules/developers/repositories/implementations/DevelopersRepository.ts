import { type Repository } from 'typeorm'
import { AppDataSource } from '../../../../database/index'
import Developers from '../../../../models/Developers'
import { type IDevelopersRepository, type IDeveloperRepositoryDTO, type IPagination } from '../IDevelopersRepository'

class DevelopersRepository implements IDevelopersRepository {
  private readonly repository: Repository<Developers>

  constructor () {
    this.repository = AppDataSource.getRepository(Developers)
  }

  async find (
    where: { [key: string]: any },
    relations?: string[],
    order?: { [key: string]: any }
  ): Promise<Developers[] | null> {
    const foundDevelopers = await this.repository.find({
      where,
      relations,
      order
    })

    return foundDevelopers
  }

  async findOne (
    where: { [key: string]: any },
    relations?: string[],
    order?: { [key: string]: any }
  ): Promise<Developers | null> {
    const foundDeveloper = await this.repository.findOne({
      where,
      relations,
      order
    })

    return foundDeveloper
  }

  async create (dto: IDeveloperRepositoryDTO): Promise<Developers> {
    const createdDeveloper = this.repository.create(dto)
    await this.repository.save(createdDeveloper)
    return createdDeveloper
  }

  async list (pagination: IPagination): Promise<[Developers[], number]> {
    const query = this.repository.createQueryBuilder('Developers')
      .leftJoinAndSelect("Developers.level", "level")

    if (pagination.search) {
      query.where(`LOWER(Developers.name) LIKE '%${pagination.search.toLowerCase()}%'`)
    }

    if (pagination.skip && pagination.limit) {
      query.skip(pagination.skip * pagination.limit).take(pagination.limit)
    }

    query.orderBy('Developers.id', 'ASC')

    const data = await query.getManyAndCount()

    return data
  }

  async update (dto: IDeveloperRepositoryDTO): Promise<Developers | null> {
    await this.repository.update({ id: dto.id }, {
      id_level: dto.id_level,
      name: dto.name,
      gender: dto.gender,
      date_birth: dto.date_birth,
      age: dto.age,
      hobby: dto.hobby
    })
    const updatedLevel = await this.repository.findOne({ where: { id: dto.id } })
    return updatedLevel
  }
}

export { DevelopersRepository }
