import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url = 'https://localhost:44384/api/Auth';
  constructor(
    private httpClient: HttpClient
  ) { }

  public login(user: any) : Observable<any> {
    return this.httpClient.post(`${this.url}/Login`, user);
  }

  public register(user: any) : Observable<any> {
    return this.httpClient.post(`${this.url}/Register`, user);
  }
}
