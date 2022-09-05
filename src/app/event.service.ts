import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from './models/events';
import { Observable, of, Subscriber } from 'rxjs';
import { catchError,map,tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private REST_API_URL = 'http://localhost:4000/events'

  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events[]>{
    return this.http.get<Events[]>(this.REST_API_URL,this.HTTP_HEADER).pipe(
      tap(events =>{
        console.log(`recieved events = ${events}`);
       }),
       catchError(error => of([]))
    )
  }

  createNewEvent(event:Events): Observable<Events>{
    let formData = new FormData();
    formData.append("eventImg", event.eventImg)
    formData.append("cost", event.cost.toString())
    formData.append("description", event.description.toString())
    formData.append("eventDate", event.eventDate.toString())
    formData.append("eventName", event.eventName.toString())
    formData.append("location", event.location.toString())
    formData.append("status", event.status.toString())


    return this.http.post<Events>(`${this.REST_API_URL}/create`,formData).pipe(
      tap(newEvent =>{
        console.log(`this Event = ${newEvent}`);
       }),
       catchError(error => of(new Events()))
    )
  }

  getEventById(id:string): Observable<Events | any>{
    const thisUrl = `${this.REST_API_URL}/find/${id}`
    return this.http.get<Events>(thisUrl).pipe(
      tap(Event =>{
        console.log(`this event = ${Event.eventImg}`);
       }),
       catchError(error => of(new Events()))
    )
  }


  updateEvent(id: String, event: Events):Observable<Events>{
    return this.http.patch<Events>(`${this.REST_API_URL}/update/${id}`,event,this.HTTP_HEADER).pipe(
      tap(updatedEvent =>{
        console.log(`this event = ${updatedEvent}`);
       }),
       catchError(error => of(new Events()))
    )
  }

  deleteEvent(id:string){
    return this.http.delete<Events>(`${this.REST_API_URL}/delete/${id}`, this.HTTP_HEADER).pipe(
      tap(deleteEvent=>{
        console.log(`deleted Event= ${deleteEvent.eventImg}`)
      }),
      catchError(error => of(new Events()))
    )
  }


}
