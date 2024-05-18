export function formatPhoneNumber(phoneNumber: string) {
  let formattedPhoneNumber = phoneNumber.replace(/\s+/g, '').replace('+', '');
  if (formattedPhoneNumber.startsWith('7')) {
      formattedPhoneNumber = '8' + formattedPhoneNumber.slice(1);
    }

  return formattedPhoneNumber;
}