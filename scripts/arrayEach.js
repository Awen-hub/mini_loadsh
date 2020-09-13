/** @format */
export function arrayEach(array = [], iteratee) {
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], i, array)
  }
}
