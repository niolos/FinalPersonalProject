import { TestBed } from '@angular/core/testing';

import { PastEventService } from './past-event.service';

describe('PastEventService', () => {
  let service: PastEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
