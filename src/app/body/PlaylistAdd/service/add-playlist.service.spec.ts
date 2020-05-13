import { TestBed } from '@angular/core/testing';

import { AddPlaylistService } from './add-playlist.service';

describe('AddPlaylistService', () => {
  let service: AddPlaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPlaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
