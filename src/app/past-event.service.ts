import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from './models/events';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError,map,tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PastEventService {

  private REST_API_URL = environment.API_URL+'/past'

  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  }

  getPastEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(this.REST_API_URL,this.HTTP_HEADER).pipe(
      tap(events =>{
        console.log(`recieved events = ${events}`);
       }),
       catchError(error => of([]))
    )
  }

  constructor(private http: HttpClient) { }
}
