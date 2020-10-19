/** @format */

interface iterateeParm {
  (value?: any, index?: number, array?: any[]): any[]
}

export function arrayMap(array: any[] = [], iteratee: iterateeParm, thisArg?: any): any[] {
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
