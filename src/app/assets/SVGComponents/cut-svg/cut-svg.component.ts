import { Component } from '@angular/core';
import { SVGDetails } from '../svgdetails';
import { Input } from '@angular/core';
@Component({
  selector: 'cut-svg',
  standalone: true,
  imports: [],
  templateUrl: './cut-svg.component.html',
  styleUrl: './cut-svg.component.css'
})
export class CutSvgComponent {
  @Input() svgDetail!:SVGDetails

}
