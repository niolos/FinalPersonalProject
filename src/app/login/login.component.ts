import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admins } from '../models/admins';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  logData = new FormGroup({
    password: new FormControl('',(Validators.required)),
    userName: new FormControl('',(Validators.required)),
    
  })

  ngOnInit(): void {
  
  }

  OnSubmit() {
    this.authService.checkLog(this.logData.value).subscribe(res =>{
     if(res.status === 'ok') {
        console.log('User logged in Successfully')
        localStorage.setItem('userName' , res['data']['existUser']['userName'])
        this.router.navigate(['/main'])
        Swal.fire({
          title:"WELCOME TO OUR ADMIN PAGE",
          icon:"success"
      })

      } else {
        Swal.fire({
          icon:"error",
          title:"Please enter valid user credentials"
      })

            console.log('Not valid user')
      }
    },(err) => {
      if(err) {
        console.log('Error is ' , err)
      }
    })
    if(this.logData.controls['password'].hasError('required')||this.logData.controls['userName'].hasError('required')) {
      Swal.fire({
        icon:"error",
        title:"Form fields cannot be empty"
    })
    }
  }


 

}
