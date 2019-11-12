import { TestBed } from '@angular/core/testing';

import { FormatTextService } from './format-text.service';

describe('FormatTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatTextService = TestBed.get(FormatTextService);
    expect(service).toBeTruthy();
  });
});
