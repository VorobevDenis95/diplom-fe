function getCurrentDate (date: Date) {
  const option = {
    minimumIntegerDigits: 2
  }
  const dateDay = date.getDate().toLocaleString('ru', option);
  const month = (date.getMonth() + 1).toLocaleString('ru', option);
  const year = (date.getFullYear() - 2000).toLocaleString('ru', option);
  return `${dateDay}.${month}.${year}`;
}

export {getCurrentDate};