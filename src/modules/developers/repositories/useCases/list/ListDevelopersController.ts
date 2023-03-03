import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import { type IPagination } from '../../IDevelopersRepository'

import { ListDevelopersUseCase } from './ListDevelopersUseCase'

class ListDevelopersController {
  async handle (request: Request<any, any, any, IPagination>, response: Response): Promise<Response> {
    const listDevelopersUseCase = container.resolve(ListDevelopersUseCase)
    try {
      const { search, skip, limit } = request.query

      const list = await listDevelopersUseCase.execute({
        search: search ?? null,
        skip: skip ?? 0,
        limit: limit ?? 0
      })

      if (!list.count) return response.status(404).json({ error: "Nenhum desenvolvedor encontrato!" })

      return response.status(200).json(list)
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({ error: err.message })
      }
      return response.status(500).json({ error: err })
    }
  }
}

export { ListDevelopersController }
