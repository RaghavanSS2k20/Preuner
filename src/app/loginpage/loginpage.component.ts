import { AfterViewInit, Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent implements OnInit {
  constructor(
    private authService:AuthService,
    private http:HttpClient
  ){}
  ngOnInit(): void {
    console.log("hii")
    this.authService.login("Raghavan@1234",  "Pass1234!")
      
  }

}
