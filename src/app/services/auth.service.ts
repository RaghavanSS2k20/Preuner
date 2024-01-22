import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable , of} from 'rxjs';
import { map } from 'rxjs';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userValSubject: BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('token')!));
  public userVal: Observable<User> = this.userValSubject.asObservable();

  userRoles: string[] = [];

  constructor(private http: HttpClient) {}

  public get userValue(): User {
    return this.userValSubject.value;
  }

  user: any = null;

  login(username: string, password: string): void {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify({ username, password });

    this.http.post("http://127.0.0.1:8000/login", body, { headers }).subscribe((data: any) => {
      this.userRoles = data.user.role ? [data.user.role] : [];
      this.user = data.user;
      console.log(this.user);
      localStorage.setItem('token', JSON.stringify(data.token),);
      this.userValSubject.next(data.user);
    });
  }

  logout(): void {
    // Implement logout logic and clear userRoles
    this.userRoles = [];
  }

  hasRole(role: string): Observable<boolean> {
    let token = localStorage.getItem('token');
     token = token ? token.replace(/^"(.*)"$/, '$1') : null;
    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`
    });

    
    if(token){
    return this.http.get<any>('http://127.0.0.1:8000/get-role', { headers }).pipe(
      
      map(data => {
      
        if ( data.role === role) {
         
          return true;
        } else {
          
          return false;
        }
      }),
      catchError(error => {
        console.error('HTTP request error:', error);
        throw error; // rethrow the error to propagate it
      })
    );
  }
else{
  return of(false)
}
}
  isLoggedIn():Observable<Boolean>{
    let token = localStorage.getItem('token');
     token = token ? token.replace(/^"(.*)"$/, '$1') : null;
    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`
    });
    if(token){
      return this.http.get<any>('http://127.0.0.1:8000/test_token',{headers,  observe: 'response' }).pipe(
        map(response => {
          if (response.status === 200){
            return true
          }
          else{
            return false
          }
        }),


      )
    }
    else{
      return of(false)
    }

  }
}
