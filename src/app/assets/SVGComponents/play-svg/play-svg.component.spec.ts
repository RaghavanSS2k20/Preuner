import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySvgComponent } from './play-svg.component';

describe('PlaySvgComponent', () => {
  let component: PlaySvgComponent;
  let fixture: ComponentFixture<PlaySvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaySvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaySvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
