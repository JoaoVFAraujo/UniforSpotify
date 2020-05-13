import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private route: Router) { }

  canActivate(): boolean {

    if(!sessionStorage.getItem('token')) {
        this.route.navigate(['login']);
        return false;
    }

    return true;
  }
}
