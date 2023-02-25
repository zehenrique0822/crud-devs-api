import type Levels from '../../../models/Levels'

interface ILevelRepositoryDTO {
  id?: string
  level: string
}

interface ILevelsRepository {
  create: (level: string) => Promise<Levels>
  findOne: (level: string) => Promise<Levels | null>
}

export type {
  ILevelsRepository,
  ILevelRepositoryDTO
}
