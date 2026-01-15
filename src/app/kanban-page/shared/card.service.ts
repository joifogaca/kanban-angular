import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { MOCK_CARDS } from '../mock/MOCK_CARDS';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): Card[]{
    return MOCK_CARDS;
  }
}
