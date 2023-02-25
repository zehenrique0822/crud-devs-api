import type Levels from '../../../models/Levels'

interface ILevelRepositoryDTO {
  id?: string
  level: string
}

interface ILevelsRepository {
  create: (level: ILevelRepositoryDTO) => Promise<Levels>
}

export type {
  ILevelsRepository,
  ILevelRepositoryDTO
}
