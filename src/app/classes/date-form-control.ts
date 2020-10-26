import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  //Override setValue method to run some custom code on input
  setValue(value: string, options: any) {
    // Disable everything except numbers or a forward slash
    if (value.match(/[^0-9|\/]/gi)) {
      // Then revert to the current value
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      // And don't run anything else
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      // Let user's value pass through
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }

    // Make sure that value passes through to bubble up to the FormGroup
    // Update input element with emitModelToViewChange
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
