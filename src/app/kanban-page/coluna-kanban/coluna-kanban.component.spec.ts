import { Card, CardStatus } from './../shared/card.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaKanbanComponent } from './coluna-kanban.component';
import { CardService } from '../shared/card.service';
import { MOCK_CARDS } from '../mock/MOCK_CARDS';

describe('ColunaKanbanComponent', () => {
  let component: ColunaKanbanComponent;
  let fixture: ComponentFixture<ColunaKanbanComponent>;
  let cardServiceSpy: jasmine.SpyObj<CardService>;

  beforeEach(async () => {
    cardServiceSpy = jasmine.createSpyObj('CardService', ['moveCard']);
    await TestBed.configureTestingModule({
      imports: [ColunaKanbanComponent],
      providers: [
        { provide: CardService, useValue: cardServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColunaKanbanComponent);
    component = fixture.componentInstance;

    component.afterColor = '#d573b6';
    component.nomeColuna = 'backlog';
    component.cards = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('onDragover deve prevenir o evento e marcar card_over como true', () => {
    const event = jasmine.createSpyObj<DragEvent>('DragEvent', ['preventDefault']);

    component.onDragover(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.card_over).toBeTrue();
  });

   it('onDragleave deve prevenir o evento e marcar card_over como false', () => {
    const event = jasmine.createSpyObj<DragEvent>('DragEvent', ['preventDefault']);

    component.card_over = true;
    component.onDragleave(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(component.card_over).toBeFalse();
  });

   it('onDrop não deve fazer nada se não houver dataTransfer', () => {
    const event = jasmine.createSpyObj<DragEvent>('DragEvent', ['preventDefault'], {
      dataTransfer: null
    });

    component.onDrop(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(cardServiceSpy.moveCard).not.toHaveBeenCalled();
  });

   it('onDrop não deve fazer nada se dataTransfer não retornar dados', () => {
    const dataTransfer = {
      getData: jasmine.createSpy().and.returnValue('')
    } as unknown as DataTransfer;

    const event = jasmine.createSpyObj<DragEvent>('DragEvent', ['preventDefault'], {
      dataTransfer
    });

    component.onDrop(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(cardServiceSpy.moveCard).not.toHaveBeenCalled();
  });

   it('onDrop deve chamar moveCard com id do card e nome da coluna', () => {
    const cardMock: Card = MOCK_CARDS[0];

    const dataTransfer = {
      getData: jasmine.createSpy().and.returnValue(JSON.stringify(cardMock))
    } as unknown as DataTransfer;

    const event = jasmine.createSpyObj<DragEvent>('DragEvent', ['preventDefault'], {
      dataTransfer
    });

    component.onDrop(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(cardServiceSpy.moveCard).toHaveBeenCalledWith(
      cardMock.id,
      component.nomeColuna
    );
  });

});
