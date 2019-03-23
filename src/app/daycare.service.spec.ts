import { TestBed } from '@angular/core/testing';

import { DaycareService } from './daycare.service';

describe('DaycareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaycareService = TestBed.get(DaycareService);
    expect(service).toBeTruthy();
  });
});
