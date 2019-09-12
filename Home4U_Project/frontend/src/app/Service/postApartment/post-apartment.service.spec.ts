import { TestBed } from '@angular/core/testing';

import { PostApartmentService } from './post-apartment.service';

describe('PostApartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostApartmentService = TestBed.get(PostApartmentService);
    expect(service).toBeTruthy();
  });
});
