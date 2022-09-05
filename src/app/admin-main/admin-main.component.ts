import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from '../subscriptions.service';
import { ActivatedRoute } from '@angular/router';
import { Subscriptions } from '../models/subscriptions';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  subscriber!: Subscriptions[]


  constructor(private subscription: SubscriptionsService, private route:ActivatedRoute) { }

  getAllSubscribers():void{
    this.subscription.getSubscribers().subscribe(getSubscribers=>{
      this.subscriber = getSubscribers
      console.log(`this Students is ${JSON.stringify(this.subscriber)}`)
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
        this.subscription.deleteSubscriber(id).subscribe({
          next:(res)=>{
            this.getAllSubscribers()
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
    this.getAllSubscribers()
  }

}
