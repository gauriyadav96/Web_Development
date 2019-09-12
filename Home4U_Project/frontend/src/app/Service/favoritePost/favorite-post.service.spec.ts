import { TestBed } from '@angular/core/testing';

import { FavoritePostService } from './favorite-post.service';

describe('FavoritePostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritePostService = TestBed.get(FavoritePostService);
    expect(service).toBeTruthy();
  });
});
