export const sumAllValues = (arr:number[]): number => {
  let acc = 0
    arr.forEach((item)=>acc+=item)
  return acc
}