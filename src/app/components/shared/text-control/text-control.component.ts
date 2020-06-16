import { Component, OnInit } from '@angular/core';
import { IFormData } from 'src/app/shared/interfaces/iform-builder';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.scss']
})
export class TextControlComponent implements OnInit {

  group: FormGroup;
  input: IFormData;
  constructor() {
    this.group = new FormGroup({});
  }

  ngOnInit() {
  }

}
