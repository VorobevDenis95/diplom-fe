export function sendCurrentDateToServer(date: string) {
  const current = date.split('.');
  
  const year = 2000 + Number(current[2]);
  const month = current[1];
  const day = current[0];
  return `${year}-${month}-${day}`;
}