import { Component, input } from '@angular/core';
import { Input } from '@angular/core';
import { SVGDetails } from '../svgdetails';
@Component({
  selector: 'play-svg',
  standalone: true,
  imports: [],
  templateUrl: './play-svg.component.html',
  styleUrl: './play-svg.component.css'
})
export class PlaySvgComponent {
  @Input() svgDetail!:SVGDetails

}
