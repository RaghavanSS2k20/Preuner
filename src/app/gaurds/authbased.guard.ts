import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
export const authbasedGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService)
  const router:Router =  inject(Router)
  return authService.isLoggedIn().pipe(
    map(isLoggedIn=>{
      if(isLoggedIn){
        return true
      }else{
        return router.createUrlTree(['forbidden']);
      }
    })

  )
 
};
