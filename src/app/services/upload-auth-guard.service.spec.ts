import { TestBed, inject } from '@angular/core/testing';

import { UploadAuthGuardService } from './upload-auth-guard.service';

describe('UploadAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadAuthGuardService]
    });
  });

  it('should be created', inject([UploadAuthGuardService], (service: UploadAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
