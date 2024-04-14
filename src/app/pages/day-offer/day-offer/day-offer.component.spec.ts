import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfferComponent } from './day-offer.component';

describe('DayOfferComponent', () => {
  let component: DayOfferComponent;
  let fixture: ComponentFixture<DayOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
