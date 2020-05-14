import { TestBed } from '@angular/core/testing';

import { EditPlayListService } from './edit-play-list.service';

describe('EditPlayListService', () => {
  let service: EditPlayListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPlayListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
