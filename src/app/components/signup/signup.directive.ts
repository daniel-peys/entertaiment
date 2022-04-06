import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const equalPasswordsValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')!.value;
  const repeatPassword = control.get('repeatPassword')!.value;

  return password && repeatPassword && password === repeatPassword
    ? null
    : {
        notEqual: true,
      };
};
