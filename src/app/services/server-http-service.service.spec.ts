import { TestBed } from '@angular/core/testing';

import { ServerHttpServiceService } from './server-http-service.service';

describe('ServerHttpServiceService', () => {
  let service: ServerHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
