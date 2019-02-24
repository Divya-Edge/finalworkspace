import { TestBed } from '@angular/core/testing';

import { TimelineUiService } from './timeline-ui.service';

describe('TimelineUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelineUiService = TestBed.get(TimelineUiService);
    expect(service).toBeTruthy();
  });
});
