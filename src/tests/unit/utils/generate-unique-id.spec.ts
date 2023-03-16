import { generateUniqueId } from '../../../utils/generateUniqueId'

describe('Generate Unique Id', () => {
  it('Should generate unique IDs', () => {
    const existingIds = [1, 2, 3]
    const newId = generateUniqueId(existingIds)

    expect(existingIds.some(existingId => existingId === newId)).toBe(false)
  })
})
