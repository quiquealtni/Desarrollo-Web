import { TestBed } from '@angular/core/testing';

import { RandomProductsService } from './random-products.service';

describe('RandomProductsService', () => {
  let service: RandomProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
