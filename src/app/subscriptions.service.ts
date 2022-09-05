import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subscriber } from 'rxjs';
import {Subscriptions} from './models/subscriptions'
import { catchError,map,tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  private REST_API_URL = 'http://localhost:4000/subscribers'

  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
   }
  constructor(private http: HttpClient) { }

  getSubscribers(): Observable<Subscriptions[]>{
    return this.http.get<Subscriptions[]>(this.REST_API_URL,this.HTTP_HEADER).pipe(
      tap(subscribers =>{
        console.log(`recieved subscribers = ${subscribers}`);
       }),
       catchError(error => of([]))
    )
  }

  createNewSubscriber(subscriber:Subscriptions): Observable<Subscriptions>{
    return this.http.post<Subscriptions>(`${this.REST_API_URL}/create`,subscriber,this.HTTP_HEADER).pipe(
      tap(newSubscribers =>{
        console.log(`this Subscriber = ${newSubscribers}`);
       }),
       catchError(error => of(new Subscriptions()))
    )
  }

  getSubscriberById(id:string): Observable<Subscriptions | any>{
    const thisUrl = `${this.REST_API_URL}/find/${id}`
    return this.http.get<Subscriptions>(thisUrl).pipe(
      tap(Subscriber =>{
        console.log(`this Subscriber = ${Subscriber.fName}`);
        console.log(`${Subscriber.dob}`);
        
       }),
       catchError(error => of(new Subscriptions()))
    )
  }


  updateSubscriber(id: String, subscriber: Subscriptions):Observable<Subscriptions>{
    return this.http.put<Subscriptions>(`${this.REST_API_URL}/update/${id}`,subscriber,this.HTTP_HEADER).pipe(
      tap(updatedSubscriber =>{
        console.log(`this subscriber = ${updatedSubscriber}`);
       }),
       catchError(error => of(new Subscriptions()))
    )
  }

  deleteSubscriber(id:string){
    return this.http.delete<Subscriptions>(`${this.REST_API_URL}/delete/${id}`, this.HTTP_HEADER).pipe(
      tap(deleteSubscriber=>{
        console.log(`deleted Subscriber= ${deleteSubscriber.fName}`)
      }),
      catchError(error => of(new Subscriptions()))
    )
  }

}