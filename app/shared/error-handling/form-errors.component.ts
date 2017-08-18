import { Component, Input } from '@angular/core';

@Component({
  selector: '<form-errors></form-errors>',
  templateUrl: 'form-errors.component.html'
})
export class FormErrorsComponent {
  @Input() formErrors: string[];
}
