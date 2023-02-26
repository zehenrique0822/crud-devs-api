import { inject, injectable } from "tsyringe"
import AppError from "../../../../../errors/AppError"

import { ILevelsRepository } from "../../ILevelsRepository"

@injectable()
class DeleteLevelsUseCase {
  constructor (
    @inject("LevelsRepository")
    private readonly repository: ILevelsRepository
  ) {}

  async execute (id: number): Promise<void> {
    const foundLevel = await this.repository.findOne({ id }, ["developers"])

    if (!foundLevel) throw new AppError("O nível não foi encontrado!", 400)

    if (foundLevel.developers?.length) {
      throw new AppError(
        `O nível ${foundLevel.level} não pode ser removido há ${foundLevel.developers?.length} desenvolvedor(es) associado a ele!`,
        501
      )
    }

    await this.repository.delete(id)
  }
}

export { DeleteLevelsUseCase }
