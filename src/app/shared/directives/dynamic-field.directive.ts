import { TelControlComponent } from './../../components/shared/tel-control/tel-control.component';
import { NumberControlComponent } from './../../components/shared/number-control/number-control.component';
import { EmailControlComponent } from './../../components/shared/email-control/email-control.component';
import {
  Directive,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';
import { TextControlComponent } from 'src/app/components/shared/text-control/text-control.component';
import { DateControlComponent } from 'src/app/components/shared/date-control/date-control.component';
import { ColorControlComponent } from './../../components/shared/color-control/color-control.component';
import { FormGroup } from '@angular/forms';

const componentMapper = {
  text: TextControlComponent,
  date: DateControlComponent,
  color: ColorControlComponent,
  email: EmailControlComponent,
  number: NumberControlComponent,
  tel: TelControlComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective {
  @Input() input: { type: string; label: string; name: string };
  @Input() group: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.input.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.input = this.input;
    this.componentRef.instance.group = this.group;
  }
}
