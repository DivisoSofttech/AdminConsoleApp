import { TestBed } from '@angular/core/testing';

import { CancellationRequestService } from './cancellation-request.service';

describe('CancellationRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancellationRequestService = TestBed.get(CancellationRequestService);
    expect(service).toBeTruthy();
  });
});
