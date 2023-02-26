import { verifyAge } from '../../../utils/verifyAge'

describe('Verify age', () => {
  test('Should return true if age matches date of birth', () => {
    const age = 22
    const dateBirth = new Date('2000-04-20')

    const result = verifyAge(age, dateBirth)

    expect(result).toBe(true)
  })

  test('Should return false if age does not match date of birth', () => {
    const age = 23
    const dateBirth = new Date('2000-04-20')

    const result = verifyAge(age, dateBirth)

    expect(result).toBe(false)
  })
})
