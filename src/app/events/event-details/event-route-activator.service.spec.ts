import { TestBed, inject } from '@angular/core/testing';
import { EventRouteActivatorService } from './event-route-activator.service';

describe('EventRouteActicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouteActivatorService]
    });
  });

  it('should ...', inject([EventRouteActivatorService], (service: EventRouteActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
