import { Component, OnInit } from '@angular/core';
import { IFormData } from 'src/app/shared/interfaces/iform-builder';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.scss']
})
export class DateControlComponent implements OnInit {
  input: IFormData;
  group: FormGroup;
  constructor() {
    this.group = new FormGroup({});
  }

  ngOnInit() {
  }

}
