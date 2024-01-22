import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVideoOverlayComponent } from './view-video-overlay.component';

describe('ViewVideoOverlayComponent', () => {
  let component: ViewVideoOverlayComponent;
  let fixture: ComponentFixture<ViewVideoOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewVideoOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewVideoOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
