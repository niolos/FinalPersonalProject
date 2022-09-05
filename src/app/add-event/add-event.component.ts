import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

import { Events } from '../models/events';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private router: Router, private EventService:EventService) { }

  createEvent = new FormGroup({
    eventName: new FormControl('',(Validators.required)),
    eventImg: new FormControl('',(Validators.required)),
    eventDate: new FormControl('',(Validators.required)),
    location: new FormControl('',(Validators.required)),
    description: new FormControl('',(Validators.required)),
    cost: new FormControl('',(Validators.required)),
    status:new FormControl('',(Validators.required))
  })


  
  newEvent():void{
    if(this.createEvent.controls['eventName'].hasError('required')||this.createEvent.controls['eventImg'].hasError('required')||this.createEvent.controls['eventDate'].hasError('required')||this.createEvent.controls['location'].hasError('required')||this.createEvent.controls['description'].hasError('required')||this.createEvent.controls['cost'].hasError('required')||this.createEvent.controls['status'].hasError('required')) {
      Swal.fire({
        icon:"error",
        title:"Form fields cannot be empty"
      })
      this.router.navigate(['/subscription '])
    }else{
      this.EventService.createNewEvent(this.createEvent.value).subscribe({
        next:(res)=>{
          Swal.fire({
            title:"Event Successfully Added",
            icon: 'success',
          })
          this.router.navigate(['/events'])
        },
        error:(err)=>{
          alert(err)
        }
      })
      console.log('Event created')
    }
  }

  file(event:any){
    console.log(event.target.files[0]);
    // this.createEvent.eventImg = event.target.files[0];
    this.createEvent.controls['eventImg'].setValue(event.target.files[0]) 
  }

  ngOnInit(): void {
  }

}
