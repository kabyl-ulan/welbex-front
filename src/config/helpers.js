export function formatPhoneNumber(phoneNumber) {
  phoneNumber = phoneNumber.replace("+", "");
  let formattedPhoneNumber =
    "+7 " +
    phoneNumber.slice(1, 4) +
    " " +
    phoneNumber.slice(4, 7) +
    "-" +
    phoneNumber.slice(7, 9) +
    "-" +
    phoneNumber.slice(9);

  return formattedPhoneNumber;
}
