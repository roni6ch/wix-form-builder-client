import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  typeOptions = ['text', 'color', 'date', 'email', 'tel', 'number'];
  snackbarSub: Subscription;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  initFormList(): FormGroup {
    return this.fb.group({
      title: ['', [Validators.required]],
      dynamicInputs: this.fb.array([]),
    });
  }

  newformGroup(): FormGroup {
    return this.fb.group({
      label: ['', [Validators.required]],
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  inputValidators(type: string): Validators {
    let validators = [Validators.required];
    switch (type) {
      case 'text':
        validators = [...validators, Validators.pattern('[a-zA-Z0-9 ]*')];
        break;
      case 'date':
        validators = [...validators,this.customDateValidator];
        break;
      case 'email':
        validators = [...validators, Validators.email, Validators.minLength(4)];
        break;
      case 'tel':
        validators = [
          ...validators,
          Validators.pattern('[0-9 -]*'),
          Validators.minLength(7),
          Validators.maxLength(12),
        ];
        break;
      case 'number':
        validators = [...validators, Validators.pattern('[0-9 ]*')];
        break;
    }
    return validators;
  }

  customDateValidator = (date: FormControl) => {
    const dateRegEx = new RegExp(/[0-9]{4}-(0?[1-9]|1[0-2])-(0?[1-9]|1\d|2\d|3[01])/);
    return dateRegEx.test(date.value) ? null : { pattern: true };
  }

  openSnackBar(message: string, action: string, duration: number) {
    this.snackbarSub = this.snackBar
      .open(message, action, {
        duration,
      })
      .onAction()
      .subscribe(() => this.router.navigate(['/form-list']));
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.snackbarSub.unsubscribe();
  }
}
