import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSVGComponentComponent } from './user-svgcomponent.component';

describe('UserSVGComponentComponent', () => {
  let component: UserSVGComponentComponent;
  let fixture: ComponentFixture<UserSVGComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSVGComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSVGComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
