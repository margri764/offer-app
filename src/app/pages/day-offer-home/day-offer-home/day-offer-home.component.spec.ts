import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfferHomeComponent } from './day-offer-home.component';

describe('DayOfferHomeComponent', () => {
  let component: DayOfferHomeComponent;
  let fixture: ComponentFixture<DayOfferHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayOfferHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayOfferHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
