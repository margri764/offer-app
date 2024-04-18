import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePublicationComponent } from './active-publication.component';

describe('ActivePublicationComponent', () => {
  let component: ActivePublicationComponent;
  let fixture: ComponentFixture<ActivePublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivePublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
