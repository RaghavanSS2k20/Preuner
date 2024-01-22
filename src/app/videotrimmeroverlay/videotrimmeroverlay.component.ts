import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { VideotrimmerComponent} from '../trim-video-component/trim-video-component.component';
@Component({
  selector: 'app-videotrimmeroverlay',
  standalone: true,
  imports: [VideotrimmerComponent, CommonModule],
  templateUrl: './videotrimmeroverlay.component.html',
  styleUrl: './videotrimmeroverlay.component.css'
})
export class VideotrimmeroverlayComponent {
  @ViewChild(VideotrimmerComponent) videoTrimmerComponent:VideotrimmerComponent;

  @Output() close = new EventEmitter<void>()
  closeOverlay():void{
    this.close.emit()
    
  }
  trimmedVideoData: any;
  createBlobUrl(blobData: any): string {
    const blobUrl = URL.createObjectURL(blobData);
    return blobUrl;
  }
  data(blobs){
    console.log(blobs);
    this.trimmedVideoData = blobs;
  }

}
