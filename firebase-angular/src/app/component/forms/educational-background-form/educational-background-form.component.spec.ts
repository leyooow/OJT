import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalBackgroundFormComponent } from './educational-background-form.component';

describe('EducationalBackgroundFormComponent', () => {
  let component: EducationalBackgroundFormComponent;
  let fixture: ComponentFixture<EducationalBackgroundFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalBackgroundFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalBackgroundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
