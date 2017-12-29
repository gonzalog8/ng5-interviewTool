import { TestBed, inject } from '@angular/core/testing';

import { SingletonDataService } from './singleton-data.service';

describe('SingletonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingletonDataService]
    });
  });

  it('should be created', inject([SingletonDataService], (service: SingletonDataService) => {
    expect(service).toBeTruthy();
  }));
});
