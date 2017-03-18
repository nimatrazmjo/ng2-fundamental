import { TestBed, inject } from '@angular/core/testing';
import { JQueryService } from './jquery.service';

describe('JQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JQueryService]
    });
  });

  it('should ...', inject([JQueryService], (service: JQueryService) => {
    expect(service).toBeTruthy();
  }));
});
