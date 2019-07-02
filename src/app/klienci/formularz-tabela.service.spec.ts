import { TestBed } from '@angular/core/testing';

import { FormularzTabelaService } from './formularz-tabela.service';

describe('FormularzTabelaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularzTabelaService = TestBed.get(FormularzTabelaService);
    expect(service).toBeTruthy();
  });
});
