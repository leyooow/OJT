import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilServiceDisplayComponent } from './civil-service-display.component';

describe('CivilServiceDisplayComponent', () => {
  let component: CivilServiceDisplayComponent;
  let fixture: ComponentFixture<CivilServiceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilServiceDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilServiceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
