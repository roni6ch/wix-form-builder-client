import { HttpService } from 'src/app/shared/services/http.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilderComponent } from './form-builder.component';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormListComponent } from '../form-list/form-list.component';
import { DataService } from 'src/app/shared/services/data.service';
import { FormSubmitComponent } from '../form-submit/form-submit.component';
import { FormSubmissionsComponent } from '../form-submittions/form-submissions.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormBuilderComponent', () => {
  let component: FormBuilderComponent;
  let fixture: ComponentFixture<FormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatTableModule,
        FormsModule,
        MatSnackBarModule,
        MatInputModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatListModule,
        MatSelectModule,
        MatIconModule
      ],
      providers: [HttpService,DataService],
      declarations: [FormBuilderComponent,FormListComponent,FormSubmitComponent,FormSubmissionsComponent,PageNotFoundComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
