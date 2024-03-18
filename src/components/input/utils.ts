function getCurrentDate (date: Date) {
  const option = {
    minimumIntegerDigits: 2
  }
  const dateDay = date.getDate().toLocaleString('ru', option);
  const month = (date.getMonth() + 1).toLocaleString('ru', option);
  const year = (date.getFullYear() - 2000).toLocaleString('ru', option);
  return `${dateDay}.${month}.${year}`;
}

function setCurrentDate(valueInput: string)  {
  const arrDate = valueInput.split('.');
  const [year, mount, day] = arrDate.reverse();
  const fullYear = 2000 + Number(year);
  const currentMonth = Number(mount) - 1;
  return new Date(fullYear, currentMonth, Number(day));
}

export {getCurrentDate, setCurrentDate};