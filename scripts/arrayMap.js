/** @format */
export function arrayMap(array = [], iteratee) {
  const mapArray = []
  for (let i = 0; i < array.length; i++) {
    mapArray.push(iteratee(array[i], i, array))
  }
  return mapArray
}
