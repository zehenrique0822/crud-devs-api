import { type IDeveloperRepositoryDTO } from '../../../modules/developers/repositories/IDevelopersRepository'
import { type ILevelRepositoryDTO } from '../../../modules/levels/repositories/ILevelsRepository'
import { api } from '../../api'

describe('developers update', () => {
  const data: any = {}

  it('Should create a level', async () => {
    const request = { level: 'Junior Developer' }
    const response = await api.post('/levels').send(request)

    expect(response.status).toEqual(201)
    expect(response.body.id).toBeDefined()

    data.createdLevelId = response.body.id
  })
  it('Should create a developer', async () => {
    const request = {
      id_level: data.createdLevelId,
      name: "Cristiano Ronaldo Ferreira",
      gender: "m",
      date_birth: new Date("2000-04-20"),
      age: 22,
      hobby: "Jogar videogame"
    }
    const response = await api.post('/developers').send(request)

    expect(response.status).toEqual(201)
    expect(response.body.id).toBeDefined()

    data.createdDeveloperId = response.body.id
  })

  it('Should list developers', async () => {
    const request = { search: '', skip: 0, limit: 0 }
    const response = await api.get('/developers').query(request)

    const foundCreatedDeveloper: IDeveloperRepositoryDTO = response?.body[0]?.find((level: IDeveloperRepositoryDTO) => level.id === data.createdDeveloperId)

    expect(response.status).toEqual(200)
    expect(response.body[0].length).toBeGreaterThan(0)
    expect(foundCreatedDeveloper).toBeDefined()
  })

  it("Should delete level", async () => {
    const response = await api.delete(`/levels/${data.createdLevelId}`)

    expect(response.status).toEqual(204)

    const getRequest = { search: '', skip: 0, limit: 0 }

    const showLevelsAfterDelete = await api.get("/levels").query(getRequest)
    expect(showLevelsAfterDelete.status).toEqual(200)

    const foundLevel = showLevelsAfterDelete.body[0].find(
      (level: ILevelRepositoryDTO) => level.id === data.createdLevelId
    )
    expect(foundLevel).toBeUndefined()
  })
})
