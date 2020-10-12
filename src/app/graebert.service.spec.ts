import { TestBed } from '@angular/core/testing';

import { GraebertService } from './graebert.service';

describe('GraebertService', () => {
  let service: GraebertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraebertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
