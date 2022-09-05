import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admins } from './models/admins';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError,map,tap } from 'rxjs';
import { authResponse } from './models/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private REST_API_URL = 'http://localhost:4000/login'

  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  checkLog(formData:any): Observable<authResponse<Admins>>{
    return this.http.post<authResponse<Admins>>(`${this.REST_API_URL}`,formData)
    // .pipe(
    //   tap(newEvent =>{
    //     console.log(`this Event = ${newEvent}`);
      //  }),
      //  catchError(error => of(new Admins()))
    // )
  }

}
