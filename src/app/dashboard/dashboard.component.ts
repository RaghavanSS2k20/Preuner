import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContentComponent } from '../content/content.component';
import { AuthService } from '../services/auth.service';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, ContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  constructor(private authService:AuthService){}
  ngAfterViewInit(): void {
     console.log(this.authService.user)
  }

}
