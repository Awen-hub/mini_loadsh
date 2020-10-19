/** @format */

interface iterateeParm {
  (currentValue: any, index?: number, array?: any[]): any
}

export function arrayEach(array: any[] = [], iteratee: iterateeParm): undefined {
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], i, array)
  }
  return undefined
}
