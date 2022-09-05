import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KeepoutGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean{
    if(!localStorage.getItem('userName')){
      this.router.navigate(['/log'])
      return false
    }
    return true
  }
  
}
