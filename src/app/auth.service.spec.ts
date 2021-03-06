import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login should work', (done) => {
    service.login('president', 'pass').subscribe((value: any) => {
      expect(value.token).toBeTruthy();
      done();
    });
  });
});
