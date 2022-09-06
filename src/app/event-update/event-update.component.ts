import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '../models/events';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  constructor(private router: Router, private EventService:EventService, private  datePipe: DatePipe, private route:ActivatedRoute) { }

  getEvents!:EventService
  createEvent!:FormGroup


  formatDate(){
    this.createEvent?.get("eventDate")?.setValue(this.datePipe.transform(this.createEvent?.get("eventDate")?.value,"yyyy-MM-dd"))

   }

  newEvent():void{
    
    this.EventService.updateEvent(this.route.snapshot.params["id"], this.createEvent.value).subscribe({
      next:(res)=>{
        Swal.fire({
          icon: 'success',
          title: 'Update Successful',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/main'])
      },
      error:(err)=>{
        alert(err)
      }
    })
    console.log('subscriber info retrieved')
  }

  file(event:any){
    // this.createEvent.eventImg = event.target.files[0];
    this.createEvent.controls['eventImg'].setValue(event.target.files[0]) 
  }

  ngOnInit(): void {
    this.EventService.getEventById(this.route.snapshot.params['id']).subscribe(event=> {
      this.getEvents = event;
      this.createEvent = new FormGroup({
        eventName: new FormControl(event.eventName),
        eventImg: new FormControl(event.eventImg),
        eventDate: new FormControl(event.eventDate),
        location: new FormControl(event.location),
        description: new FormControl(event.description),
        cost: new FormControl(event.cost),
        status:new FormControl(event.status)
      })
      this.formatDate()
    })
  }
}