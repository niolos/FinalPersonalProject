import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { Events } from '../models/events';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

  events!:Events[]

  constructor(private eventService:EventService, private route:ActivatedRoute) { }

  getAllEvents():void{
    this.eventService.getEvents().subscribe(getEvents=>{
      this.events = getEvents
      console.log(`this Students is ${JSON.stringify(this.events)}`)
    })
  }

  deleteubScriber(id:string): void{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventService.deleteEvent(id).subscribe({
          next:(res)=>{
            this.getAllEvents()
          },
          error:()=>{
            alert("Error while deleting the product")
          }
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
   
  }

  ngOnInit(): void {
    this.getAllEvents()
  }


}