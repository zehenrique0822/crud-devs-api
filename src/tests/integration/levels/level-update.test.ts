import { type ILevelRepositoryDTO } from '../../../modules/levels/repositories/ILevelsRepository'
import { api } from '../../api'

describe('levels update', () => {
  const data: any = {}

  it('Should create a level', async () => {
    const request = { level: 'Junior Example Test' }
    const response = await api.post('/levels').send(request)

    expect(response.status).toEqual(201)
    expect(response.body.id).toBeDefined()

    data.createdLevelId = response.body.id
  })
  it('Should list levels', async () => {
    const request = { search: '', skip: 0, limit: 0 }
    const response = await api.get('/levels').query(request)

    const foundCreatedLevel: ILevelRepositoryDTO = response?.body[0]?.find((level: ILevelRepositoryDTO) => level.id === data.createdLevelId)

    expect(response.status).toEqual(200)
    expect(response.body[0].length).toBeGreaterThan(0)
    expect(foundCreatedLevel).toBeDefined()
  })

  it('Should level update', async () => {
    const request = { level: 'Pleno Example Test' }

    const response = await api.put(`/levels/${data.createdLevelId}`).send(request)

    expect(response.status).toEqual(200)
    expect(response.body.level).toEqual(request.level)
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