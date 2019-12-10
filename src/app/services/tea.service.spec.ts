import { TestBed } from '@angular/core/testing';

import { TeaService } from './tea.service';

describe('TeaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeaService = TestBed.get(TeaService);
    expect(service).toBeTruthy();
  });
});
