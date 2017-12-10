import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';

function validateDate(): ValidatorFn {
    return (date: AbstractControl) => {
    
    let today = new Date();
    today.setDate(today.getDate() - 2);
    let bday = new Date(date.value);
    
    if(bday < today) { return null; }
    else { return { pastDate: {valid:false} } }
    
    }
}

@Directive({
    selector: '[pastDate][ngModel]',
    providers: [{provide: NG_VALIDATORS, useExisting: DateValidator, multi: true }]
})

export class DateValidator implements Validator {
    
    validator: ValidatorFn;
  
    constructor() {
        this.validator = validateDate();
    }
    
    validate(c: FormControl) {
        return this.validator(c);
    }
  
}