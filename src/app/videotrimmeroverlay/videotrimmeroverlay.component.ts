import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { VideotrimmerComponent} from '../trim-video-component/trim-video-component.component';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-videotrimmeroverlay',
  standalone: true,
  imports: [VideotrimmerComponent, CommonModule],
  templateUrl: './videotrimmeroverlay.component.html',
  styleUrl: './videotrimmeroverlay.component.css'
})
export class VideotrimmeroverlayComponent implements OnInit {
  vdeoSrc:any;
  getVideoBlob(videoUrl:string) {
    

    // Make the HTTP request
    this.http.get(videoUrl, { responseType: 'arraybuffer' })
      .subscribe(response => {
        // Convert the response to a blob
        const blob = new Blob([response], { type: 'video/mp4' });

        // Do something with the blob, for example, create a video element
        console.log(URL.createObjectURL(blob))
        this.vdeoSrc = URL.createObjectURL(blob);
        
      });
  }
  videoUrl:string = "../assets/v5.mp4";
  constructor(private http:HttpClient ){}
  ngOnInit(): void {
   
  }

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
