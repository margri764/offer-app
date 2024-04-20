import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferExampleModalComponent } from './offer-example-modal.component';

describe('OfferExampleModalComponent', () => {
  let component: OfferExampleModalComponent;
  let fixture: ComponentFixture<OfferExampleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferExampleModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferExampleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
