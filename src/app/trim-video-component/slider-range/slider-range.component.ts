import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'slider-range',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './slider-range.component.html',
  styleUrl: './slider-range.component.css'
})
export class SliderRangeComponent {
  @Input('min') min:number ;
  @Input('max') max:number;
  @Input('step') step:number = 1;

  @Input() valueMin:number ;
  @Output('valueMinChange') valueMinChange:EventEmitter<number> = new EventEmitter();

  @Input('valueMax') valueMax:number;
  @Output('valueMaxChange') valueMaxChange:EventEmitter<number> = new EventEmitter();  

  slide1 = 0;
  slide2 = 10;

  constructor() { }

  ngAfterViewInit(): void {
    var sliderSections = document.getElementsByClassName("range-slider");
    for( var x = 0; x < sliderSections.length; x++ ){
      var sliders = sliderSections[x].getElementsByTagName("input");
      for( var y = 0; y < sliders.length; y++ ){
        if( sliders[y].type === "range" ){
          let self = this;
          sliders[y].oninput = function(){
            self.getVals(this);
          };
          // Manually trigger event first time to display values
        //  sliders[y].oninput(null);
        }
      }
    }
  }

  getVals(self:any) {
    // Get slider values
    var parent = self.parentNode;
    var slides = parent.getElementsByTagName("input");
      var slide1 = parseFloat( slides[0].value );
      var slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }
        this.valueMinChange.emit(slide1);
        this.valueMaxChange.emit(slide2);
        this.slide1 = slide1;
        this.slide2 = slide2;
  }

}
