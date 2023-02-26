import type Levels from '../../../models/Levels'

interface ILevelRepositoryDTO {
  id?: string
  level: string
}

interface IPagination {
  search: string
  skip: number
  limit: number
}

interface ILevelsRepository {
  create: (level: string) => Promise<Levels>
  findOne: (
    where: { [key: string]: any },
    relations?: string[],
    order?: { [key: string]: any },
  ) => Promise<Levels | null>
  list: (pagination: IPagination) => Promise<[Levels[], number]>
}

export type {
  ILevelsRepository,
  ILevelRepositoryDTO,
  IPagination
}
