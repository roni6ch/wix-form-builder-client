import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

/* Angular Material */
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSnackBarModule} from '@angular/material/snack-bar';

/* Components */
import { AppComponent } from './app.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormSubmitComponent } from './components/form-submit/form-submit.component';
import { FormSubmissionsComponent } from './components/form-submittions/form-submissions.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DynamicFieldDirective } from './shared/directives/dynamic-field.directive';
/* Dynamic Components */
import { TextControlComponent } from './components/shared/text-control/text-control.component';
import { DateControlComponent } from './components/shared/date-control/date-control.component';
import { ColorControlComponent } from './components/shared/color-control/color-control.component';
import { NumberControlComponent } from './components/shared/number-control/number-control.component';
import { EmailControlComponent } from './components/shared/email-control/email-control.component';
import { TelControlComponent } from './components/shared/tel-control/tel-control.component';


@NgModule({
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
  entryComponents: [
    TextControlComponent,
    DateControlComponent,
    ColorControlComponent,
    NumberControlComponent,
    EmailControlComponent,
    TelControlComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
