export class FormValidationUtilities {
  static isNotValidEmail(email: string): boolean {
    return email && email.indexOf('@') < 0;
  }

  static isNotValidPhoneNumber(phoneNumber: string): boolean {
    return phoneNumber && !phoneNumber.match('^\\d{3}-\\d{3}-\\d{4}$');
  }
}
