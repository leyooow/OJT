import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyGenerateReportComponent } from './faculty-generate-report.component';

describe('FacultyGenerateReportComponent', () => {
  let component: FacultyGenerateReportComponent;
  let fixture: ComponentFixture<FacultyGenerateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyGenerateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyGenerateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
