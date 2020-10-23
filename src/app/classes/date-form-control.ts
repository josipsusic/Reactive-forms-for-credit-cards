import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  //Override setValue method to run some custom code on input
  setValue(value: string, options: any) {
    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }

    // Make sure that value passes through to bubble up to the FormGroup
    // Update input element with emitModelToViewChange
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
