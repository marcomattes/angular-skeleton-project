import { Injectable } from '@angular/core';

@Injectable()
export class FormatUtilities {
  formatPhoneNumber(phoneNumber: string) {
    let preResult: string = phoneNumber.replace(new RegExp('[^\\d]', 'g'), '');

    let result: string = preResult.substring(0, 3);
    result = preResult.substring(3, 6) ? result += `-${preResult.substring(3, 6)}` : result;
    result = preResult.substring(6, 10) ? result += `-${preResult.substring(6, 10)}` : result;

    return result;
  }
}
