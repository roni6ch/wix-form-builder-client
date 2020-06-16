import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { FormSubmitComponent } from "./form-submit.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { FormListComponent } from '../form-list/form-list.component';
import { FormSubmissionsComponent } from '../form-submittions/form-submissions.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe("FormSubmitComponent", () => {
  let component: FormSubmitComponent;
  let fixture: ComponentFixture<FormSubmitComponent>;

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
    fixture = TestBed.createComponent(FormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
