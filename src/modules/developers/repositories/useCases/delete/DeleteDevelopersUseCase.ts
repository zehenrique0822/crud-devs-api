import { inject, injectable } from "tsyringe"
import AppError from "../../../../../errors/AppError"

import { IDevelopersRepository } from "../../IDevelopersRepository"

@injectable()
class DeleteDevelopersUseCase {
  constructor (
    @inject("DevelopersRepository")
    private readonly repository: IDevelopersRepository
  ) {}

  async execute (id: number): Promise<void> {
    const foundDeveloper = await this.repository.findOne({ id })

    if (!foundDeveloper) throw new AppError("O desenvolvedor informado não existe!", 400)

    await this.repository.delete(id)
  }
}

export { DeleteDevelopersUseCase }
