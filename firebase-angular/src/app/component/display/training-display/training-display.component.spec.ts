import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDisplayComponent } from './training-display.component';

describe('TrainingDisplayComponent', () => {
  let component: TrainingDisplayComponent;
  let fixture: ComponentFixture<TrainingDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
