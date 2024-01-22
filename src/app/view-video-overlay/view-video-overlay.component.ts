import { Component } from '@angular/core';
import { CardDetails } from '../card-details';
import { Input } from '@angular/core';
import { EventEmitter , Output} from '@angular/core';
@Component({
  selector: 'app-view-video-overlay',
  standalone: true,
  imports: [],
  templateUrl: './view-video-overlay.component.html',
  styleUrl: './view-video-overlay.component.css'
})
export class ViewVideoOverlayComponent {
  @Input() card!:CardDetails;
  @Output() close = new EventEmitter<void>();

  closeOverlay(): void {
    console.log("hehhehheh")
    this.close.emit();
  }



}
