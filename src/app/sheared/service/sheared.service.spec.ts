import { TestBed } from '@angular/core/testing';

import { ShearedService } from './sheared.service';

describe('ShearedService', () => {
  let service: ShearedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShearedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
