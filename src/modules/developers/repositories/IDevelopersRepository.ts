import type Developers from '../../../models/Developers'

interface IDeveloperRepositoryDTO {
  id?: number
  id_level: number
  name: string
  gender: string
  date_birth: Date
  age: number
  hobby: string
}

interface IPagination {
  search: string
  skip: number
  limit: number
}

interface IDevelopersRepository {
  create: (dto: IDeveloperRepositoryDTO) => Promise<Developers>
  find: (
    where: { [key: string]: any },
    relations?: string[],
    order?: { [key: string]: any },
  ) => Promise<Developers[] | null>
  findOne: (
    where: { [key: string]: any },
    relations?: string[],
    order?: { [key: string]: any },
  ) => Promise<Developers | null>
  list: (pagination: IPagination) => Promise<{ data: Developers[], count: number }>
  update: (dto: IDeveloperRepositoryDTO) => Promise<Developers | null>
  delete: (id: number) => Promise<void>
}

export type {
  IDevelopersRepository,
  IDeveloperRepositoryDTO,
  IPagination
}
