import { Component, OnInit } from '@angular/core';
import { IFormData } from 'src/app/shared/interfaces/iform-builder';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-email-control',
  templateUrl: './email-control.component.html',
  styleUrls: ['./email-control.component.scss']
})
export class EmailControlComponent implements OnInit {

  input: IFormData;
  group: FormGroup;
  constructor() {
    this.group = new FormGroup({});
   }

  ngOnInit() {
  }

}
