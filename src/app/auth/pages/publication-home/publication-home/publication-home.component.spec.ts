import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationHomeComponent } from './publication-home.component';

describe('PublicationHomeComponent', () => {
  let component: PublicationHomeComponent;
  let fixture: ComponentFixture<PublicationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
