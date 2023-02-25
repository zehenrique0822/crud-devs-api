import { api } from '../../api'

describe('levels update', () => {
  const data: any = {}

  it('should create a level', async () => {
    const request = { level: 'Junior teste' }
    const response = await api.post('/level').send(request)

    expect(response.status).toEqual(201)
    expect(response.body.id).toBeDefined()

    data.createdProductId = response.body.id
  })
})
