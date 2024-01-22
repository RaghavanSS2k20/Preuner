import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotrimmeroverlayComponent } from './videotrimmeroverlay.component';

describe('VideotrimmeroverlayComponent', () => {
  let component: VideotrimmeroverlayComponent;
  let fixture: ComponentFixture<VideotrimmeroverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideotrimmeroverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideotrimmeroverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
