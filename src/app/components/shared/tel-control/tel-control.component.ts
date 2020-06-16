import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormData } from 'src/app/shared/interfaces/iform-builder';

@Component({
  selector: 'app-tel-control',
  templateUrl: './tel-control.component.html',
  styleUrls: ['./tel-control.component.scss']
})
export class TelControlComponent implements OnInit {

  group: FormGroup;
  input: IFormData;
  constructor() {
    this.group = new FormGroup({});
  }

  ngOnInit() {
  }

}
