export function formatTimeStringHour(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  let str1; 
    if(hours % 10 === 1 || hours === 1)  str1 = '';
    else if (hours >= 2 && hours <= 4 ||
      hours % 10 >=2 && hours % 10 <=4
     ) str1 = 'а';
     else str1 = 'ов';
     return `${hours} час${str1}`;
}

export function formatTimeStringMinutes(seconds: number) {
  const minutes = Math.ceil((seconds / 3600) / 60);

  let str2;
  if(minutes % 10 === 1 || minutes === 1)  str2 = 'а';
  else if (minutes >=2 && minutes <=4 ||
    minutes % 10 >=2 && minutes % 10 <=4
   ) str2 = 'ы';
   else str2 = '';

  return `${minutes} минут${str2}`;
}



