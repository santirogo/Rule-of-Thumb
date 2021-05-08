import { TestBed } from '@angular/core/testing';

import { GaugeBarService } from './gauge-bar.service';

describe('GaugeBarService', () => {
  let service: GaugeBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaugeBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
