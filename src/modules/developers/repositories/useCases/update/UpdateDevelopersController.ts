import { type Request, type Response } from 'express'
import { container } from 'tsyringe'
import * as Yup from 'yup'
import { verifyAge } from '../../../../../utils/verifyAge'

import { UpdateDevelopersUseCase } from './UpdateDevelopersUseCase'

class UpdateDevelopersController {
  async handle (request: Request, response: Response): Promise<Response> {
    const updateDevelopersUseCase = container.resolve(UpdateDevelopersUseCase)
    try {
      const { id } = request.params
      const { id_level, name, gender, date_birth, age, hobby } = request.body

      const schema = Yup.object({
        id_level: Yup.number()
          .required('O nível do desenvolvedor é obrigatório.'),
        name: Yup.string()
          .required('O nome do desenvolvedor é obrigatório.')
          .min(3, 'O nome precisa ter no mínimo 3 caracteres.')
          .max(255, 'O nome precisa ter no máximo 255 caracteres.'),
        gender: Yup.string()
          .required('O sexo do desenvolvedor é obrigatório.')
          .max(1, 'O sexo precisa ter 1 caractere.'),
        date_birth: Yup.date().required('A data de nascimento é obrigatória').nullable(),
        age: Yup.number().required('A idade do desenvolvedor é obrigatória').test(
          'verify-age',
          'A idade não corresponde à data de nascimento',
          function (value) {
            return verifyAge(value, this.parent.date_birth)
          }
        ),
        hobby: Yup.string()
          .required('O hobby do desenvolvedor é obrigatório.')
          .min(3, 'O hobby precisa ter no mínimo 3 caracteres.')
          .max(255, 'O hobby precisa ter no máximo 255 caracteres.')
      })

      const data = { id_level, name, gender, date_birth, age, hobby }

      await schema.validate(data)

      const updatedLevel = await updateDevelopersUseCase.execute({ id: Number(id), ...data })

      return response.status(200).json(updatedLevel)
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({ error: err.message })
      }
      return response.status(500).json({ error: err })
    }
  }
}

export { UpdateDevelopersController }
