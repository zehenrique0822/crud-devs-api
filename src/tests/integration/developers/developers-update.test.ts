import { api } from '../../api'

describe('developers update', () => {
  const data: any = {}

  it('Should create a developer', async () => {
    const request = {
      id_level: 2,
      name: "Cristiano Ronaldo Ferreira",
      gender: "Masculino",
      date_birth: new Date("2000-04-20"),
      age: 23,
      hobby: "Jogar videogame"
    }
    const response = await api.post('/developers').send(request)

    expect(response.status).toEqual(201)
    expect(response.body.id).toBeDefined()

    data.createdLevelId = response.body.id
  })
})
