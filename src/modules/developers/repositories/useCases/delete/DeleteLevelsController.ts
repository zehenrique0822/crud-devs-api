import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import * as Yup from 'yup'

import { DeleteDevelopersUseCase } from './DeleteDevelopersUseCase'

class DeleteDevelopersController {
  async handle (request: Request, response: Response): Promise<Response> {
    const deleteDevelopersUseCase = container.resolve(DeleteDevelopersUseCase)
    try {
      const { id } = request.params

      const schema = Yup.object({
        id: Yup.number()
          .required('O ID do desenvolvedor é obrigatório.')
      })

      await schema.validate({ id })

      await deleteDevelopersUseCase.execute(Number(id))

      return response.status(204).json()
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({ error: err.message })
      }
      return response.status(500).json({ error: err })
    }
  }
}

export { DeleteDevelopersController }
