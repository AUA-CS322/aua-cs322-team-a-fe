import { TestBed } from '@angular/core/testing';

import { SearchServiceService } from './search-service.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SearchServiceService', () => {
  let service: SearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    });
    service = TestBed.inject(SearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
