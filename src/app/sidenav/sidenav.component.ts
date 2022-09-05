import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogOut() {
    Swal.fire({
      icon: 'success',
      title: 'Logged Out Successful',
      showConfirmButton: false,
      timer: 1400
    })
    
    if(localStorage.getItem('userName')) {
      localStorage.removeItem('userName')
      this.router.navigate(['/log'])
    }

  }
}
