export const generateUniqueId = (existingIds: number[]): number => {
  let id: number

  do {
    id = Math.floor(Math.random() * 10000)
  } while (existingIds.some(existingId => existingId === id))

  return id
}
