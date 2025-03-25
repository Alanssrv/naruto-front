import { TestBed } from '@angular/core/testing';

import { NarutoApiService } from './naruto-api.service';

describe('NarutoApiService', () => {
  let service: NarutoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NarutoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
