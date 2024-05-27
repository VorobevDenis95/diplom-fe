// export function requiredFullName(name: string) {
//   const russianRegex = /^[\u0410-\u044F\u0401\u0451]+$/;
//   return russianRegex.test(name) && name.length >= 2;
// }


// export function requiredFieldsObject(data: PassengerDataSeats) {
//   const keys = Object.keys(data);
//   const result = [];
//   for (const key of keys) {
//     if (key === 'first_name' || key === 'last_name' || key === 'patronymic') {
//       if (!requiredFullName(data[key])) {
//         result.push({ type: key, value: 'Поле заполненно не правильно или не заполнено вообще' });
//       }
//     }



    
//   }
//   return result;
// }

export function maskPhone(phone: string): string {
  let newPhone = phone;

  if (newPhone[0] !== '+') {
    newPhone = '+' + newPhone.slice(0); 
  }

  if (newPhone[1] === '8') {
    newPhone = '+7' + newPhone.slice(1);
  }

  return '+' + newPhone;
}
