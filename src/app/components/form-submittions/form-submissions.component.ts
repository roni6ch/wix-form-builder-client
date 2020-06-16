import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  IFormBuilder,
  ISubmissions,
} from 'src/app/shared/interfaces/iform-builder';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-form-submissions',
  templateUrl: './form-submissions.component.html',
  styleUrls: ['./form-submissions.component.scss'],
})
export class FormSubmissionsComponent implements OnInit {
  public idSub: Subscription;
  public spinner = true;
  public id: number;
  public data = [];
  public headers: string[] = [];
  public dataSource: MatTableDataSource<ISubmissions>;
  public formListSub: Subscription;
  public form: IFormBuilder;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.idSub = this.route.params.subscribe(async (params) => {
      this.form = await this.httpService.getFormSubmit(params.id);
      this.spinner = false;
      if (this.form && this.form.submissions && this.form.submissions.length > 0) {
        this.data = this.form.submissions;
        // set headers
        this.headers = this.form.submissions[0].map((head) => head.name);
        // flatten submissions into table schema
        const submissions = [];
        this.form.submissions.forEach(submission => {
          const subObj = {};
          submission.forEach(val => {
            subObj[val.name] = val.value;
          });
          submissions.push(subObj);
        });
        this.dataSource = new MatTableDataSource(submissions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  // filter form by keyup event
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.idSub.unsubscribe();
  }
}
