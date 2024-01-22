import { Component, Input } from '@angular/core';
import { CardDetails } from '../card-details';
import { CommonModule } from '@angular/common';
import { VideotrimmeroverlayComponent } from '../videotrimmeroverlay/videotrimmeroverlay.component';
import { ViewVideoOverlayComponent } from '../view-video-overlay/view-video-overlay.component';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ViewVideoOverlayComponent, VideotrimmeroverlayComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: CardDetails;
  // cardDetail1: CardDetails={
  //   title:'hehe',
  //   content:"ok",
  //   videoUrl:'https://v3.cdnpk.net/videvo_files/video/free/2012-09/large_watermarked/hd0628_preview.mp4'

    
  // }
  showOptions:boolean = false;
  isOverLayVisible = false;
  isTrimmerOverlayVisible = false;
  handleOnClick(){
    this.isOverLayVisible=true;
    console.log("overlay opened")
  }
  closeOverlay(){
    this.isOverLayVisible = false
  }
  closeTrimmer(){
    this.isTrimmerOverlayVisible=false
  }
  toggleOptions():void{
   
    this.showOptions = !this.showOptions;
    console.log("Clickedc", this.showOptions)
  }
  editCard():void{
    console.log("Edited")
    this.showOptions = false
    this.isTrimmerOverlayVisible = true

  }
  removeCard():void{
    console.log("remove")
  }

  
}
