export function extractNumber(inputString?: string | number): number {
  if (typeof inputString === "number") {
    return inputString;
  } else if (typeof inputString === "string") {
    const regex = /-?\d+(\.\d+)?/;
    const match = inputString.match(regex);
    return match ? Number(match[0]) : NaN;
  }
  return NaN;
}
