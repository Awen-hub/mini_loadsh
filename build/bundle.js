/** @format */
function arrayEach(array = [], iteratee) {
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], i, array)
  }
  return undefined
}

/** @format */
function arrayMap(array = [], iteratee, thisArg) {
  let iterateeCopy
  if (thisArg) {
    iterateeCopy = iteratee.prototype
      ? iteratee.bind(thisArg)
      : new Function("return" + iteratee.toString()).bind(thisArg)()
  } else {
    iterateeCopy = iteratee
  }
  const mapArray = []
  for (let i = 0; i < array.length; i++) {
    mapArray.push(iterateeCopy(array[i], i, array))
  }
  return mapArray
}

/** @format */
function arrayReduce(array = [], iteratee, initValue) {
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

export { arrayEach, arrayMap, arrayReduce }
