import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabService } from '../services/shared/tab.service';
import { CardComponent } from '../card/card.component';
import { CardDetails } from '../card-details';
import { OverlayComponent } from '../overlay/overlay.component';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, CardComponent, OverlayComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  isEmpty:Boolean = true
  cards: CardDetails[] = [
    { title: 'untitiled - 1', content: 'This is the content of Card 1.', videoUrl: '../assets/v5.mp4' },
    { title: 'Card 2', content: 'This is the content of Card 2.', videoUrl: 'https://v3.cdnpk.net/videvo_files/video/free/2012-09/large_preview/hd0628.mp4' },
    { title: 'Card 3', content: 'This is the content of Card 3.', videoUrl: 'https://v3.cdnpk.net/videvo_files/video/free/2012-09/large_preview/hd0628.mp4' },
    { title: 'Card 3', content: 'This is the content of Card 3.', videoUrl: 'https://v3.cdnpk.net/videvo_files/video/free/2012-09/large_preview/hd0628.mp4' },
    { title: 'Card 3', content: 'This is the content of Card 3.', videoUrl: 'https://v3.cdnpk.net/videvo_files/video/free/2012-09/large_preview/hd0628.mp4' },
    { title: 'Card 3', content: 'This is the content of Card 3.', videoUrl: 'https://v3.cdnpk.net/videvo_files/video/free/2012-09/large_preview/hd0628.mp4' }
    // Add more cards as needed
  ];
  currentTab: string = ''
  isOverlayVisible = false
  handleUpload(){
    this.isOverlayVisible = true;
    console.log(this.isOverlayVisible)
  }
  closeOverlay(){
    this.isOverlayVisible = false
  }
  constructor(private tabService: TabService) {}
  ngOnInit() {
    this.tabService.currentTab$.subscribe((tab) => {
      this.currentTab = tab;
    });
  }


}
