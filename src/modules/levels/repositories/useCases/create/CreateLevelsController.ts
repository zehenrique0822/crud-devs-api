import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import * as Yup from 'yup'

import { CreateLevelUseCase } from './CreateLevelsUseCase'

class CreateLevelsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const createLevelsUseCase = container.resolve(CreateLevelUseCase)
    try {
      const { level } = request.body

      const schema = Yup.object({
        level: Yup.string()
          .required('O nível é obrigatório.')
          .min(3, 'O nível precisa ter no mínimo 3 caracteres.')
          .max(255, 'O nível precisa ter no máximo 255 caracteres.')
      })

      await schema.validate({ level })

      const createdLevel = await createLevelsUseCase.execute(String(level))

      return response.status(201).json(createdLevel)
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({ error: err.message })
      }
      return response.status(500).json({ error: err })
    }
  }
}

export { CreateLevelsController }
