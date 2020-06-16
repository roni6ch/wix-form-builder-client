import { Component, OnInit } from '@angular/core';
import { IFormData } from 'src/app/shared/interfaces/iform-builder';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-color-control',
  templateUrl: './color-control.component.html',
  styleUrls: ['./color-control.component.scss']
})
export class ColorControlComponent implements OnInit {

  group: FormGroup;
  input: IFormData;
  constructor() {
    this.group = new FormGroup({});
   }

  ngOnInit() {
  }

}
