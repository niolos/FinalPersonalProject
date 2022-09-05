import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastDialogueComponent } from './past-dialogue.component';

describe('PastDialogueComponent', () => {
  let component: PastDialogueComponent;
  let fixture: ComponentFixture<PastDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastDialogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
