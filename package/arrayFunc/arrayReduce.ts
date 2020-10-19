/** @format */

interface iterateeParm {
  (total: any, currentValue: any, currentIndex?: number, array?: any[]): any
}

export function arrayReduce(array: any[] = [], iteratee: iterateeParm, initValue?: any): any {
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
