import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingDialogueComponent } from './coming-dialogue.component';

describe('ComingDialogueComponent', () => {
  let component: ComingDialogueComponent;
  let fixture: ComponentFixture<ComingDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
