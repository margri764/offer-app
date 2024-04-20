import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferDescriptionComponent } from './add-offer-description.component';

describe('AddOfferDescriptionComponent', () => {
  let component: AddOfferDescriptionComponent;
  let fixture: ComponentFixture<AddOfferDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOfferDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOfferDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
