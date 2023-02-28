import { inject, injectable } from 'tsyringe'

import type Levels from '../../../../../models/Levels'
import { ILevelsRepository, type IPagination } from '../../ILevelsRepository'

@injectable()
class ListLevelsUseCase {
  constructor (
    @inject('LevelsRepository')
    private readonly repository: ILevelsRepository
  ) {}

  async execute (pagination: IPagination): Promise<{ data: Levels[], count: number }> {
    const list = await this.repository.list(pagination)
    return list
  }
}

export { ListLevelsUseCase }
