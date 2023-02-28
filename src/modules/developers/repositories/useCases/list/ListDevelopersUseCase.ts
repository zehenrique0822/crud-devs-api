import { inject, injectable } from 'tsyringe'

import type Developers from '../../../../../models/Developers'
import { IDevelopersRepository, type IPagination } from '../../IDevelopersRepository'

@injectable()
class ListDevelopersUseCase {
  constructor (
    @inject('DevelopersRepository')
    private readonly repository: IDevelopersRepository
  ) {}

  async execute (pagination: IPagination): Promise<{ data: Developers[], count: number }> {
    const list = await this.repository.list(pagination)
    return list
  }
}

export { ListDevelopersUseCase }
