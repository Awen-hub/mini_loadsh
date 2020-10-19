/** @format */
export function arrayReduce(array = [], iteratee, initValue) {
  if (array.length === 0) return 0
  let total = initValue ? initValue + array[0] : array[0]
  if (array.length >= 2) {
    for (let i = 1; i < array.length; i++) {
      total = iteratee(total, array[i], i, array)
    }
    return total
  }
  return total
}
