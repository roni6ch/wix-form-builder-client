import { Component, OnInit } from '@angular/core';
import { IFormData } from 'src/app/shared/interfaces/iform-builder';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.scss']
})
export class NumberControlComponent implements OnInit {

  input: IFormData;
  group: FormGroup;
  constructor() {
    this.group = new FormGroup({});
   }

  ngOnInit() {
  }

}
