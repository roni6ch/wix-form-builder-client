import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { FormListComponent } from '../form-list/form-list.component';
import { FormSubmitComponent } from '../form-submit/form-submit.component';
import { FormSubmissionsComponent } from '../form-submittions/form-submissions.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

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
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
