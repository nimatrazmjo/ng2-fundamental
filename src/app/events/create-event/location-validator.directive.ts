import { Directive } from '@angular/core';
import {Validators, FormGroup, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[LocationValidator]',
  providers:[{provide:NG_VALIDATORS, useExisting : LocationValidatorDirective, multi : true}]
})
export class LocationValidatorDirective implements Validators{

  validate(formGroup : FormGroup): { [ key : string]: any} {
    let addressGroup = formGroup.controls['address']
    let cityGroup = formGroup.controls['city']
    let countryGroup = formGroup.controls['country']
    let onlineUrlGroup = (<FormGroup>formGroup.root).controls['onlineUrl']

    if((addressGroup && addressGroup.value && cityGroup && cityGroup.value && countryGroup && countryGroup.value) || (onlineUrlGroup && onlineUrlGroup.value)) {
      return null
    } else {
      return {validateLocation : false}
    }
  }
  constructor() { }

}
