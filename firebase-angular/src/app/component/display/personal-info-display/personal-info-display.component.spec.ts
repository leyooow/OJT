import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoDisplayComponent } from './personal-info-display.component';

describe('PersonalInfoDisplayComponent', () => {
  let component: PersonalInfoDisplayComponent;
  let fixture: ComponentFixture<PersonalInfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInfoDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
