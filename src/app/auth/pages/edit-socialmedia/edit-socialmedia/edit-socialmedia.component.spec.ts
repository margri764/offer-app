import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocialmediaComponent } from './edit-socialmedia.component';

describe('EditSocialmediaComponent', () => {
  let component: EditSocialmediaComponent;
  let fixture: ComponentFixture<EditSocialmediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSocialmediaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSocialmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
