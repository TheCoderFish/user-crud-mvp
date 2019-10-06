import { TestBed } from '@angular/core/testing';

import { PresenterService } from './presenter.service';

describe('PresenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresenterService = TestBed.get(PresenterService);
    expect(service).toBeTruthy();
  });
});
