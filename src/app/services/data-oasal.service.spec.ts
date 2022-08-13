import { TestBed } from '@angular/core/testing';

import { DataOasalService } from './data-oasal.service';

describe('DataOasalService', () => {
  let service: DataOasalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOasalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
