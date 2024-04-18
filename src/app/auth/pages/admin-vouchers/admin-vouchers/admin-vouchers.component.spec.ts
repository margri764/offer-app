import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVouchersComponent } from './admin-vouchers.component';

describe('AdminVouchersComponent', () => {
  let component: AdminVouchersComponent;
  let fixture: ComponentFixture<AdminVouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVouchersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
