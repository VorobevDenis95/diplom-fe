export function getCurrentDate(duration: number) {
  const date = new Date(duration * 1000);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}
