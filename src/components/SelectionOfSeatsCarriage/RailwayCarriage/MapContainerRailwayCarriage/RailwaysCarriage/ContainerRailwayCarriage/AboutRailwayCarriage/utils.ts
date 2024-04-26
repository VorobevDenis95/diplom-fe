export function searchNumber(str: string) {
  const matchResult = str.match(/\d+/);
  const numberString = matchResult ? matchResult[0] : ''
  return numberString;
}
