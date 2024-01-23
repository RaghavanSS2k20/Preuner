import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
export const rolebasedGuard: CanActivateFn = (route, state) => {
  console.log("Data",route.data['expectedRole'])
  const expectedRole = route.data ? route.data['expectedRole'] : undefined;
  const authService: AuthService =  inject(AuthService)
  const router:Router = inject(Router)
  return authService.hasRole(expectedRole).pipe(
      map(hasRole => {
        if (hasRole) {
          return true;
        } else {
          // Redirect to unauthorized page or any other logic you want
         // this.router.navigate(['/unauthorized']);
         return router.createUrlTree(['forbidden']);
          
        }
      })
    );
};
