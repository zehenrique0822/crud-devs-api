import { type Repository } from 'typeorm'
import { AppDataSource } from '../../../../database/index'
import Developers from '../../../../models/Developers'
import { type IDevelopersRepository, type IDeveloperRepositoryDTO } from '../IDevelopersRepository'

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
}

export { DevelopersRepository }
