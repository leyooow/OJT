import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGenerateReportComponent } from './admin-generate-report.component';

describe('AdminGenerateReportComponent', () => {
  let component: AdminGenerateReportComponent;
  let fixture: ComponentFixture<AdminGenerateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGenerateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGenerateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
