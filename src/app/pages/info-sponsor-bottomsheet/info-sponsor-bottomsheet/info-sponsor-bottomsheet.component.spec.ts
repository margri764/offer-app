import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSponsorBottomsheetComponent } from './info-sponsor-bottomsheet.component';

describe('InfoSponsorBottomsheetComponent', () => {
  let component: InfoSponsorBottomsheetComponent;
  let fixture: ComponentFixture<InfoSponsorBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoSponsorBottomsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoSponsorBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
