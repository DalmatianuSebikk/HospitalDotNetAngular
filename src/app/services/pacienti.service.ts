import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PacientiService {
  public url = 'https://localhost:44384/api/pacienti';
  public httpOptions = {
    headers: new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('Token'))
  };

  constructor(
    public http: HttpClient,
  ) { }

  public getPacients(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  public getPacientById(id:number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  public addPacient(pacient:any): Observable<any> {
    return this.http.post(`${this.url}`, pacient, this.httpOptions);
  }

  public editPacient(pacient:any): Observable<any> {
    return this.http.put(`${this.url}`, pacient);
  }

  public deletePacient(id:number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }
}
