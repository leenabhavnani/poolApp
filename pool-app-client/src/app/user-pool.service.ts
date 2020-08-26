import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPoolService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/getAllUserPools';

  constructor(private http: HttpClient) { }

  getUserpool(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUserpool(userpool: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, userpool);
  }

  updateUserpool(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }


  getUserpoolList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
