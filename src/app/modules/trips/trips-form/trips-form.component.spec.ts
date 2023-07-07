import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsFormComponent } from './trips-form.component';

describe('TripsFormComponent', () => {
  let component: TripsFormComponent;
  let fixture: ComponentFixture<TripsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
