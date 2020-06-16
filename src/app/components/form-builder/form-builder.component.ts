import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  formBuilder: FormGroup;
  newForm: FormGroup;
  spinner: boolean = false;
  @ViewChild('stepper') stepper;
  typeOptions = [];
  constructor(
    private ds: DataService,
    private httpService: HttpService
  ) {}

  get title() {
    return this.formBuilder.get('title');
  }
  get dynamicInputs() {
    return this.formBuilder.get('dynamicInputs') as FormArray;
  }
  ngOnInit() {
    this.typeOptions = this.ds.typeOptions;
    this.formBuilder = this.ds.initFormList();
    this.newForm = this.ds.newformGroup();
  }
  addFormGroup() {
    if (
      !this.dynamicInputs.value
        .map((v) => v.name)
        .includes(this.newForm.value.name)
    ) {
      this.dynamicInputs.push(this.newForm);
      this.newForm = this.ds.newformGroup();
      // check if form have "name" property already
    } else {
      this.ds.openSnackBar('Please choose another control "Name"', '', 5000);
    }
    setTimeout(() => {
      this.stepper.reset();
    }, 100);
  }
  deleteFormControl(index: number) {
    this.dynamicInputs.removeAt(index);
  }
  clearNewFormInput(inputName: string) {
    this.newForm.patchValue({ [inputName]: '' });
  }
  clearTitle() {
    this.formBuilder.patchValue({ title: '' });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.dynamicInputs.controls,
      event.previousIndex,
      event.currentIndex
    );
    moveItemInArray(
      this.dynamicInputs.value,
      event.previousIndex,
      event.currentIndex
    );
  }
  async onSubmit() {
    this.spinner = true;
    if (this.formBuilder.valid) {
      const result = await this.httpService.addFormList(this.formBuilder.value);
      if (result) {
        this.ds.openSnackBar(
          'Form Builded Successfully!',
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
}
