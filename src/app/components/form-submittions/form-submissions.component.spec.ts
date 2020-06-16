import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import { FormSubmissionsComponent } from './form-submissions.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { FormListComponent } from '../form-list/form-list.component';
import { FormSubmitComponent } from '../form-submit/form-submit.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

describe('FormSubmissionsComponent', () => {
  let component: FormSubmissionsComponent;
  let fixture: ComponentFixture<FormSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatListModule,
        MatProgressSpinnerModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        HttpClientModule,
        MatTableModule,
        MatSelectModule,
        MatIconModule,
        MatStepperModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FormBuilderComponent,FormListComponent,FormSubmitComponent,FormSubmissionsComponent,PageNotFoundComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
