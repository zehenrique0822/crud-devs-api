import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import * as Yup from 'yup'

import { UpdateLevelsUseCase } from './UpdateLevelsUseCase'

class UpdateLevelsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const updateLevelsUseCase = container.resolve(UpdateLevelsUseCase)
    try {
      const { id } = request.params
      const { level } = request.body

      const schema = Yup.object({
        id: Yup.number()
          .required('O ID do nível é obrigatório.'),
        level: Yup.string()
          .required('O nível é obrigatório.')
          .min(3, 'O nível precisa ter no mínimo 3 caracteres.')
          .max(255, 'O nível precisa ter no máximo 255 caracteres.')
      })

      await schema.validate({ id, level })

      const updatedLevel = await updateLevelsUseCase.execute(Number(id), level)

      return response.status(200).json(updatedLevel)
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({ error: err.message })
      }
      return response.status(500).json({ error: err })
    }
  }
}

export { UpdateLevelsController }
