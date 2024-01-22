import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideotrimmerComponent } from '../trim-video-component/trim-video-component.component';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [VideotrimmerComponent, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
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
