import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { JwtService } from './services/jwt.service';

import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, ContentComponent, DashboardComponent,  RouterLink, RouterLinkActive, HttpClientModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pruner';
  jwtService:JwtService = inject(JwtService)
  isUserBlocked: Boolean = false
  // constructor(authService:AuthService){}
  ngOnInit(): void {
  
      
  }


}
