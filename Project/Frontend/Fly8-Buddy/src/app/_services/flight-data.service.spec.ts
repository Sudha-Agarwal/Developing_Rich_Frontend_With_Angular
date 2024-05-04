import { TestBed } from '@angular/core/testing';

import { FlightDataService } from './flight-data.service';

describe('FlightDataService', () => {
  let service: FlightDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
