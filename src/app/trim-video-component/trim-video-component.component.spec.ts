import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimVideoComponentComponent } from './trim-video-component.component';

describe('TrimVideoComponentComponent', () => {
  let component: TrimVideoComponentComponent;
  let fixture: ComponentFixture<TrimVideoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimVideoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrimVideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
