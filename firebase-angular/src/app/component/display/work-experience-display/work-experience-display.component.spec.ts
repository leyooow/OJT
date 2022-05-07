import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceDisplayComponent } from './work-experience-display.component';

describe('WorkExperienceDisplayComponent', () => {
  let component: WorkExperienceDisplayComponent;
  let fixture: ComponentFixture<WorkExperienceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExperienceDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExperienceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
