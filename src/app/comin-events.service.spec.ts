import { TestBed } from '@angular/core/testing';

import { CominEventsService } from './comin-events.service';

describe('CominEventsService', () => {
  let service: CominEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CominEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
