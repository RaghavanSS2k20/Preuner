import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class JwtService {
   private jwtHelper: JwtHelperService;
   private isUserBlocked: boolean = false;



 constructor() {
    this.jwtHelper = new JwtHelperService();
  }
  decodeToken(token: string): any {
    try {
      const decodedToken = this.jwtHelper.decodeToken(token);

      // Check isBlocked status and set the variable accordingly
      this.isUserBlocked = decodedToken && decodedToken.isBlocked;

      return decodedToken;
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  } 
  getIsUserBlocked(): boolean {
    return this.isUserBlocked;
  }
}
