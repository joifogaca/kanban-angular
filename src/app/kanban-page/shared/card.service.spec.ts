import { TestBed } from '@angular/core/testing';

import { CardService } from './card.service';
import { MOCK_CARDS } from '../mock/MOCK_CARDS';
import { CARD_STATUS, CardStatus } from './card.model';

describe('CardService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
    service = TestBed.inject(CardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

    it('deve iniciar com os cards do MOCK_CARDS', () => {
    const cards = service.cards();

    expect(cards.length).toBe(MOCK_CARDS.length);
    expect(cards).toEqual(MOCK_CARDS);
  });

  it('cardsByStatus deve retornar apenas cards do status informado', () => {
    const status = 'backlog';

    const cardsByStatusSignal = service.cardsByStatus(status);
    const result = cardsByStatusSignal();

    expect(result.every(card => card.status === status.toString())).toBeTrue();
  });

  it('moveCard deve alterar o status do card corretamente', () => {
    const cardOriginal = MOCK_CARDS[0];
    const novoStatus = CARD_STATUS.DOING;

    service.moveCard(cardOriginal.id, novoStatus);

    const cardsAtualizados = service.cards();
    const cardAtualizado = cardsAtualizados.find(c => c.id === cardOriginal.id);

    expect(cardAtualizado).toBeTruthy();
    expect(cardAtualizado?.status).toBe(novoStatus);
  });

   it('cardsByStatus deve reagir quando moveCard for chamado', () => {
    const statusOrigem = MOCK_CARDS[0].status;
    const novoStatus = CARD_STATUS.DOING;

    const computedSignal = service.cardsByStatus(novoStatus);

    // antes da mudança
    expect(computedSignal().length).toBe(
      MOCK_CARDS.filter(c => c.status === novoStatus).length
    );

    service.moveCard(MOCK_CARDS[0].id, novoStatus);

    // depois da mudança
    expect(
      computedSignal().some(card => card.id === MOCK_CARDS[0].id)
    ).toBeTrue();
  });
});
