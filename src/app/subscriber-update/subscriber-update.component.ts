import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SubscriptionsService } from '../subscriptions.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscriptions } from '../models/subscriptions';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-subscriber-update',
  templateUrl: './subscriber-update.component.html',
  styleUrls: ['./subscriber-update.component.css']
})
export class SubscriberUpdateComponent implements OnInit {

  constructor(private SubscriptionsService:SubscriptionsService, private router: Router, private route:ActivatedRoute, private datePipe: DatePipe) {
   }

  formatDate(){
  this.createSubscriber?.get("dob")?.setValue(this.datePipe.transform(this.createSubscriber?.get("dob")?.value,"yyyy-MM-dd"))

  }
   
   
  getSubscriber!: Subscriptions
  createSubscriber!: FormGroup

  newSubscriber() :void{
    this.SubscriptionsService.updateSubscriber(this.route.snapshot.params["id"], this.createSubscriber.value).subscribe({
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

  ngOnInit(): void {
    
    this.SubscriptionsService.getSubscriberById(this.route.snapshot.params['id']).subscribe(subscriber=> {
      this.getSubscriber = subscriber;
      this.createSubscriber = new FormGroup({
        fName: new FormControl(subscriber.fName),
        lName: new FormControl(subscriber.lName),
        email:new FormControl(subscriber.email),
        phoneNumber:new FormControl(subscriber.phoneNumber),
        alias:new FormControl(subscriber.alias),
        dob: new FormControl(subscriber.dob)
        
      })
      this.formatDate()
    });
    console.log('subscriber info retrieved')
  }
}


