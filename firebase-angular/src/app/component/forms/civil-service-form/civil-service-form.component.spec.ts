import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilServiceFormComponent } from './civil-service-form.component';

describe('CivilServiceFormComponent', () => {
  let component: CivilServiceFormComponent;
  let fixture: ComponentFixture<CivilServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilServiceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
