import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddShopsComponent } from './admin-add-shops.component';

describe('AdminAddShopsComponent', () => {
  let component: AdminAddShopsComponent;
  let fixture: ComponentFixture<AdminAddShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddShopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
