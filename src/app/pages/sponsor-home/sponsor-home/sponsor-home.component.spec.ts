import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorHomeComponent } from './sponsor-home.component';

describe('SponsorHomeComponent', () => {
  let component: SponsorHomeComponent;
  let fixture: ComponentFixture<SponsorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
