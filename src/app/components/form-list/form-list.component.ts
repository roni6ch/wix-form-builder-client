import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IFormList } from './../../shared/interfaces/iform-list';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss'],
})
export class FormListComponent implements OnInit {
  public spinner = true;
  public data = [];
  public displayedColumns: string[] = [
    'id',
    'title',
    'submissions',
    'submitPage',
    'submissionsPage',
  ];
  public dataSource: MatTableDataSource<IFormList> = null;
  public formListSub: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpService: HttpService) {}

  async ngOnInit() {
    this.formListSub = this.httpService.getFormList().subscribe((formList) => {
      this.spinner = false;
      this.data = formList;
      if (formList.length) {
        this.dataSource = new MatTableDataSource(formList);
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
    this.formListSub.unsubscribe();
  }
}
