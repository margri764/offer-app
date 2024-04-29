import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBottomsheetComponent } from './category-bottomsheet.component';

describe('CategoryBottomsheetComponent', () => {
  let component: CategoryBottomsheetComponent;
  let fixture: ComponentFixture<CategoryBottomsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryBottomsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryBottomsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
