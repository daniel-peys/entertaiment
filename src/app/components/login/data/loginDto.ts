import { AbstractControl } from '@angular/forms';

export interface loginData {
  email: AbstractControl | null;
  password: AbstractControl | null;
}
