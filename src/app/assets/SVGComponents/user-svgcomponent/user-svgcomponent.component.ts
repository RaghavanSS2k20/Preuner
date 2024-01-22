import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SVGDetails } from '../svgdetails';
@Component({
  selector: 'app-user-svgcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-svgcomponent.component.html',
  styleUrl: './user-svgcomponent.component.css'
})
export class UserSVGComponentComponent {
  @Input() svgdetails!: SVGDetails;
}
