import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormList } from './../../shared/interfaces/iform-list';
import {
  IFormBuilder,
  ISubmissions,
} from './../../shared/interfaces/iform-builder';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private serverUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getFormList(): Observable<IFormList[]> {
    return this.http.get<IFormList[]>(this.serverUrl);
  }
  async addFormList(builderForm: IFormBuilder): Promise<IFormList | boolean> {
    return await this.http
      .put<IFormList>(this.serverUrl, builderForm)
      .toPromise();
  }

  async submitForm(formData: IFormBuilder): Promise<ISubmissions> {
    return await this.http
      .put<ISubmissions>(`${this.serverUrl}/submitForm`, formData)
      .toPromise();
  }

  async getFormSubmit(formID: string): Promise<IFormBuilder> {
    let params = new HttpParams();
    params = params.append('formID', formID);
    return await this.http
      .get<IFormBuilder>(`${this.serverUrl}/formByID`, {
        params,
      })
      .toPromise();
  }
}
