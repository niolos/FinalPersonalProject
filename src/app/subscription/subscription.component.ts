import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriptionsService } from '../subscriptions.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private router: Router, private subscriptionService:SubscriptionsService  ) { }
  
  createSubscriber = new FormGroup({
    fName: new FormControl('',(Validators.required)),
    lName: new FormControl('',(Validators.required)),
    email: new FormControl('',(Validators.required,Validators.email)),
    alias: new FormControl('',(Validators.required)),
    dob: new FormControl('',(Validators.required)),
    phoneNumber: new FormControl('',(Validators.required))
  })


  newSubscriber():void{
    if(this.createSubscriber.controls['fName'].hasError('required')||this.createSubscriber.controls['lName'].hasError('required')||this.createSubscriber.controls['email'].hasError('required')||this.createSubscriber.controls['alias'].hasError('required')||this.createSubscriber.controls['dob'].hasError('required')||this.createSubscriber.controls['phoneNumber'].hasError('required')) {
      Swal.fire({
        icon:"error",
        title:"Form fields cannot be empty"
      })
      this.router.navigate(['/subscription '])
    }
    else if(this.createSubscriber.controls['email'].hasError('email')){
      Swal.fire({
        icon:"error",
        title:"Please enter a valid email"
    })
    this.router.navigate(['/subscription '])
    }else{
    this.subscriptionService.createNewSubscriber(this.createSubscriber.value).subscribe({
      next:(res)=>{
        Swal.fire({
          icon: 'success',
          title: 'Thank You For Subscribing',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/'])
      },
      error:(err)=>{
        alert(err)
      }
    })
    console.log('Subscriber created')
  }
}

  ngOnInit(): void {
  }

}
