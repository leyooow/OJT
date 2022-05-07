import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalBackgroundDisplayComponent } from './educational-background-display.component';

describe('EducationalBackgroundDisplayComponent', () => {
  let component: EducationalBackgroundDisplayComponent;
  let fixture: ComponentFixture<EducationalBackgroundDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalBackgroundDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalBackgroundDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
