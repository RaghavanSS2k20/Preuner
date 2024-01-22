import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css'
})
export class OverlayComponent {
  
  @Output() close = new EventEmitter<void>();
  videoLink:string;
  closeOverlay(): void {
    this.close.emit();
  }
submitLink():void{
  
    // Here you can send the videoLink value to the backend
    // You can use a service to handle the HTTP request
    // For simplicity, we'll just log the value for now
    console.log('Video Link:', this.videoLink);
    this.close.emit()

}

}
