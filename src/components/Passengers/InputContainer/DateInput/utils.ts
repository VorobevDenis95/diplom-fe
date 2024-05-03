export function addPointDate(text: string) {
  return text.replace(/(\d{2})(?=\d)/g, '$1.');
}
