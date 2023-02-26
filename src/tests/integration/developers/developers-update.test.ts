import { type IDeveloperRepositoryDTO } from '../../../modules/developers/repositories/IDevelopersRepository'
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

  it('Should developer update', async () => {
    const request = {
      id_level: data.createdLevelId,
      name: "Cristiano Ronaldo da Silva",
      gender: "m",
      date_birth: new Date("2000-04-02"),
      age: 20,
      hobby: "Jogar futebol"
    }

    const response = await api.put(`/developers/${data.createdDeveloperId}`).send(request)

    expect(response.status).toEqual(200)
    expect(response.body.name).toEqual(request.name)
    expect(response.body.gender).toEqual(request.gender)
    expect(new Date(response.body.date_birth)).toEqual(request.date_birth)
    expect(response.body.age).toEqual(request.age)
    expect(response.body.hobby).toEqual(request.hobby)
  })
})
