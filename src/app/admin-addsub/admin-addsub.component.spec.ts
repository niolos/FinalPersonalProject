import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddsubComponent } from './admin-addsub.component';

describe('AdminAddsubComponent', () => {
  let component: AdminAddsubComponent;
  let fixture: ComponentFixture<AdminAddsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddsubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
