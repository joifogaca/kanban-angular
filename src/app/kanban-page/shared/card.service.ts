import { computed, Injectable, signal } from '@angular/core';
import { Card, CardStatus } from './card.model';
import { MOCK_CARDS } from '../mock/MOCK_CARDS';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly _cards = signal<Card[]>(MOCK_CARDS);

  cards = this._cards.asReadonly();

  constructor() { }

  cardsByStatus(status: CardStatus) {
    return computed(() =>
      this._cards().filter(card => card.status === status)
    );
  }

  moveCard(cardId: string, newStatus: CardStatus) {
    this._cards.update(cards =>
      cards.map(card =>
        card.id === cardId
          ? { ...card, status: newStatus }
          : card
      )
    );
  }
}
