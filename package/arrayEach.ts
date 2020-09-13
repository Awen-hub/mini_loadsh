/** @format */

export function arrayEach(array: any[] = [], iteratee: (item?: any, index?: number, array?: any[]) => {}): void {
  for (let i = 0; i < array.length; i++) {
    iteratee(array[i], i, array)
  }
}
