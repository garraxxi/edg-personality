import { TestBed, async, inject } from '@angular/core/testing';

import { PsicologistGuard } from './psicologist.guard';

describe('PsicologistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PsicologistGuard]
    });
  });

  it('should ...', inject([PsicologistGuard], (guard: PsicologistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
