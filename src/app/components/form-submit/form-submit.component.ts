import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormBuilder } from 'src/app/shared/interfaces/iform-builder';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.scss'],
})
export class FormSubmitComponent implements OnInit {
  idSub: Subscription;
  formsList: IFormBuilder;
  myForm: FormGroup;
  spinner: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private httpService: HttpService,
    private ds: DataService,
    private router: Router
  ) {}

  get formInputs() {
    return this.myForm.get('data') as FormGroup;
  }

  ngOnInit() {
    this.idSub = this.route.params.subscribe(async (params) => {
      this.formsList = await this.httpService.getFormSubmit(params.id);
      if (this.formsList) {
        // iterate over form dynamic inputs and add them to form group
        const formGroup = {};
        this.formsList.dynamicInputs.forEach((formControl) => {
          formGroup[formControl.name] = this.fb.control(
            '',
            this.ds.inputValidators(formControl.type)
            // [Validators.required]
          );
        });
        this.myForm = this.fb.group({
          id: params.id,
          data: this.fb.group(formGroup),
        });
      } else {
        this.router.navigate(['/app-page-not-found'], {
          skipLocationChange: true,
        });
      }
    });
  }

  async onSubmit() {
    this.spinner = true;
    if (this.myForm.value) {
      const result = await this.httpService.submitForm(this.myForm.value);
      if (result) {
        this.ds.openSnackBar(
          'Form Submitted Successfully!',
          'Go to Form Lists',
          0
        );
      } else {
        this.ds.openSnackBar(
          'Ooopps.. something went wrong!',
          'Go to Form Lists',
          0
        );
      }
      this.spinner = false;
    }
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.idSub.unsubscribe();
  }
}
