import moment from 'moment'

export const verifyAge = (age: number, dateBirth: Date): boolean => {
  const birthDate = moment(dateBirth)
  const today = moment()
  const diffYears = today.diff(birthDate, 'years')
  const diffMonths = today.diff(birthDate, 'months') % 12
  const diffDays = today.diff(birthDate, 'days') % 30
  const ageMatches = diffYears >= age && (diffYears > age || diffMonths >= 0) && (diffYears > age || diffMonths > 0 || diffDays >= 0)

  return ageMatches
}
