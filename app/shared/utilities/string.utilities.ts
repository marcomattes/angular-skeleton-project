import { Injectable } from '@angular/core';

Injectable();
export class StringUtilities {
  nullOrEmpty(value: string): string {
    return value == null ? '' : value;
  }

  trimObject(value: any): void {
    for (let property in value) {
      if (value.hasOwnProperty(property)
        && value[property]
        && !Array.isArray(value[property])) {
         value[property] = value[property].toString().trim();
      }
    }
  }
}
