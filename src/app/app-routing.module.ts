import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormListComponent } from './components/form-list/form-list.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormSubmitComponent } from './components/form-submit/form-submit.component';
import { FormSubmissionsComponent } from './components/form-submittions/form-submissions.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'form-list', component: FormListComponent},
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'form-submit/:id', component: FormSubmitComponent },
  { path: 'form-submissions/:id', component: FormSubmissionsComponent },
  { path: '',   redirectTo: '/form-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
