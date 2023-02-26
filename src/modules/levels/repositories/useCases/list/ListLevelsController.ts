import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { type IPagination } from '../../ILevelsRepository'

import { ListLevelsUseCase } from './ListLevelsUseCase'

class ListLevelsController {
  async handle (request: Request<any, any, any, IPagination>, response: Response): Promise<Response> {
    const listLevelsUseCase = container.resolve(ListLevelsUseCase)
    try {
      const { search, skip, limit } = request.query

      const list = await listLevelsUseCase.execute({
        search: search ?? null,
        skip: skip ?? 0,
        limit: limit ?? 0
      })

      return response.status(200).json(list)
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({ error: err.message })
      }
      return response.status(500).json({ error: err })
    }
  }
}

export { ListLevelsController }
