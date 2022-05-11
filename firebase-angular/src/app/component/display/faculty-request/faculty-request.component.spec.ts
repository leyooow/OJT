import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRequestComponent } from './faculty-request.component';

describe('FacultyRequestComponent', () => {
  let component: FacultyRequestComponent;
  let fixture: ComponentFixture<FacultyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
