import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyMostSearchComponent } from './weekly-most-search.component';

describe('WeeklyMostSearchComponent', () => {
  let component: WeeklyMostSearchComponent;
  let fixture: ComponentFixture<WeeklyMostSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyMostSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeeklyMostSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
