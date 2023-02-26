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
  find: (
    where: { [key: string]: any },
    relations?: string[],
    order?: { [key: string]: any },
  ) => Promise<Levels[] | null>
  findOne: (
    where: { [key: string]: any },
    relations?: string[],
    order?: { [key: string]: any },
  ) => Promise<Levels | null>
  list: (pagination: IPagination) => Promise<[Levels[], number]>
  update: (id: number, level: string) => Promise<Levels | null>
  delete: (id: number) => Promise<void>
}

export type {
  ILevelsRepository,
  ILevelRepositoryDTO,
  IPagination
}
