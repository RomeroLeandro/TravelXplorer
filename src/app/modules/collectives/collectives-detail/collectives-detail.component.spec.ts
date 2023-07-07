import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectivesDetailComponent } from './collectives-detail.component';

describe('CollectivesDetailComponent', () => {
  let component: CollectivesDetailComponent;
  let fixture: ComponentFixture<CollectivesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectivesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectivesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
