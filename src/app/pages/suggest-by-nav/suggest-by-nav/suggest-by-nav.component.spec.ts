import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestByNavComponent } from './suggest-by-nav.component';

describe('SuggestByNavComponent', () => {
  let component: SuggestByNavComponent;
  let fixture: ComponentFixture<SuggestByNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestByNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggestByNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
