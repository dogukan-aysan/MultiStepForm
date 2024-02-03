export function validateEmail(mail) {
  const pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.match(pattern)) {
    return true;
  }
  return false;
}

export function validatePhone(phone) {
  const pattern =
    /^\+?([0-9]{1,2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone.match(pattern)) {
    return true;
  }
  return false;
}
