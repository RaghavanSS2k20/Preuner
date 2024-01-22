import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVGDetails } from '../assets/SVGComponents/svgdetails';
import { OverlayComponent } from '../overlay/overlay.component';
import { TabService } from '../services/shared/tab.service';
import { Router } from '@angular/router';
import { UserSVGComponentComponent } from '../assets/SVGComponents/user-svgcomponent/user-svgcomponent.component';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, UserSVGComponentComponent,OverlayComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentTab: string = 'home'
  isOverlayVisible = false
  userName: string =  "Raghavan"
  handleUpload(){
    this.isOverlayVisible = true;
    console.log(this.isOverlayVisible)
  }
  closeOverlay(){
    this.isOverlayVisible = false
  }
  svgdetails :SVGDetails = {
    size:"20px",
    fill:"white"
  }
  constructor(private tabService: TabService, private router:Router){

  }
  ngOnInit(): void {
    // Set the default active tab
    this.setActiveTab('home');
  }
  navigateProfile():void{
    this.router.navigate(['/profile']);
  }

  setActiveTab(tab: string): void {
    this.currentTab = tab;
    this.tabService.setCurrentTab(tab);
  }

}
