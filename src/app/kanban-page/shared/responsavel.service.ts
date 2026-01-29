import { Injectable, signal } from '@angular/core';
import { Responsavel } from './card.model';
import { MOCK_RESPONSAVEIS } from '../mock/MOCK_RESPONSAVEIS';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {
  private readonly _responsaveis = signal<Responsavel[]>(MOCK_RESPONSAVEIS);

    responsaveis = this._responsaveis.asReadonly();

  constructor() { }
}
