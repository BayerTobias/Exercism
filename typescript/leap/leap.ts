export function isLeap(year: number): boolean {
  if(year % 100 === 0 && year % 400 === 0) return true

  return year % 4 === 0 &&  year % 100 !== 0;
}
