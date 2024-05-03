import { PassengerDataSeats } from "./PassengerContainer";

export function requiredFullName(name: string) {
  const russianRegex = /^[\u0410-\u044F\u0401\u0451]+$/;
  return russianRegex.test(name) && name.length >= 2;
}

export function requiredBirthday(date: string) {
  const regex = /^\d{2}\.\d{2}\.\d{2}$/;
  return date.length === 8 && regex.test(date);
}

export function requiredNumbers(date: string, length: number) {
  const regex = /^\d+$/;
  return date.length === length && regex.test(date);
}

export function requiredPassport(str: string) {
  console.log(str)
  const regex = /^\d{4}\s\d{6}$/;
  return regex.test(str);
}

export function requiredCertificate(str: string) {
  const regex = /^[A-Z]{3}-[А-Я]{2}-d{6}$/;
  return regex.test(str);
}


export function requiredFieldsObject(data: PassengerDataSeats) {
  const keys = Object.keys(data);
  const result = [];
  for (const key of keys) {
    if (key === 'first_name' || key === 'last_name' || key === 'patronymic') {
      if (!requiredFullName(data[key])) {
        result.push({ type: key, value: 'Поле заполненно не правильно или не заполнено вообще' });
      }
    }

    if (key === 'birthday') {
      if (requiredBirthday(data[key])) {
        result.push({ type: key, value: 'Дата рождения заполнена не правильно. Пример: 12.05.1990' })
      }
    }

    if (key === 'document_data' && data.document_type === "паспорт") {
      if (!requiredPassport(data[key])) {
        result.push({
          type: key,
          value: 'Неправильно заполнена серия и номер паспорта'
        })
      }
    }

    if (key === 'document_data' && data.document_type === "свидетельство") {
      if (!requiredCertificate(data[key])) {
        result.push({
          type: key,
          value: 'Номер свидетельства о рождении указан некорректно. Пример: VIII-ЫП-123456',
        })
      }
    }
  }
  return result;
}
