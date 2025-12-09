export const eggCount = (displayValue: number): number => {
  return displayValue.toString(2).split("").filter(character => character === "1").length
}
