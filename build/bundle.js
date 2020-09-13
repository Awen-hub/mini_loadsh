/** @format */
function arrayEach(array = [], iteratee = () => []) {
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], i, array)
  }
  return array
}

/** @format */
function arrayMap(array = [], iteratee) {
  const mapArray = []
  for (let i = 0; i < array.length; i++) {
    mapArray.push(iteratee(array[i], i, array))
  }
  return mapArray
}

export { arrayEach, arrayMap }
