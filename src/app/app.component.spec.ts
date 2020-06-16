import { FormListComponent } from "./components/form-list/form-list.component";
import { TestBed, async } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormBuilderComponent } from "./components/form-builder/form-builder.component";
import { FormSubmitComponent } from "./components/form-submit/form-submit.component";
import { FormSubmissionsComponent } from "./components/form-submittions/form-submissions.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { DynamicFieldDirective } from './shared/directives/dynamic-field.directive';
import { TextControlComponent } from './components/shared/text-control/text-control.component';
import { DateControlComponent } from './components/shared/date-control/date-control.component';
import { ColorControlComponent } from './components/shared/color-control/color-control.component';
import { NumberControlComponent } from './components/shared/number-control/number-control.component';
import { EmailControlComponent } from './components/shared/email-control/email-control.component';
import { TelControlComponent } from './components/shared/tel-control/tel-control.component';


describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormListComponent,
        FormBuilderComponent,
        FormSubmitComponent,
        FormSubmissionsComponent,
        PageNotFoundComponent,
        DynamicFieldDirective,
        TextControlComponent,
        DateControlComponent,
        ColorControlComponent,
        NumberControlComponent,
        EmailControlComponent,
        TelControlComponent
      ],
      imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatPaginatorModule,
        MatSelectModule,
        DragDropModule,
        MatStepperModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatSnackBarModule,
        MatListModule,
        FormsModule,
        MatToolbarModule,
        MatSlideToggleModule,
        MatIconModule,
        MatInputModule,
        MatSortModule,
        MatTableModule
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
