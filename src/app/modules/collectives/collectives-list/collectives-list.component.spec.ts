import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectivesListComponent } from './collectives-list.component';

describe('CollectivesListComponent', () => {
  let component: CollectivesListComponent;
  let fixture: ComponentFixture<CollectivesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectivesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
