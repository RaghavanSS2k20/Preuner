import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutSvgComponent } from './cut-svg.component';

describe('CutSvgComponent', () => {
  let component: CutSvgComponent;
  let fixture: ComponentFixture<CutSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CutSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CutSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
