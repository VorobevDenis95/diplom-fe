export function getDateTimeTrain(time: number) {
  const date = new Date(time * 1000);
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  return `${hour}:${minutes}`;
}

export function getTravelTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}:${minutes}`;
}

export function capitalized (text: string) {
  const updatedText = text.replace(/(?:^|[^\p{L}])[а-яё]/gu, match => match.toUpperCase());
  return updatedText;
}