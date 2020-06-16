import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormListComponent } from './form-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { FormSubmitComponent } from '../form-submit/form-submit.component';
import { FormSubmissionsComponent } from '../form-submittions/form-submissions.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormListComponent', () => {
  let component: FormListComponent;
  let fixture: ComponentFixture<FormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatProgressSpinnerModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        HttpClientModule,
        MatListModule,
        MatTableModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatInputModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormBuilderComponent,FormListComponent,FormSubmitComponent,FormSubmissionsComponent,PageNotFoundComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title in a h1 tag', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(FormListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Form Lists');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
