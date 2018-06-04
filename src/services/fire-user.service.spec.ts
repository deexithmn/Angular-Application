import { TestBed, inject } from '@angular/core/testing';

import { FireUserService } from './fire-user.service';

describe('FireUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireUserService]
    });
  });

  it('should be created', inject([FireUserService], (service: FireUserService) => {
    expect(service).toBeTruthy();
  }));
});
