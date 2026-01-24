import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoKanbanComponent } from './cartao-kanban.component';
import { Card } from '../shared/card.model';
import { MOCK_CARDS } from '../mock/MOCK_CARDS';

describe('CartaoKanbanComponent', () => {
  let component: CartaoKanbanComponent;
  let fixture: ComponentFixture<CartaoKanbanComponent>;

   const mockCard: Card = MOCK_CARDS[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoKanbanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaoKanbanComponent);
    component = fixture.componentInstance;

    component.card = mockCard; // Input obrigatório
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it('deve receber o card via @Input', () => {
    expect(component.card).toEqual(mockCard);
  });

  it('deve iniciar o drag corretamente', () => {
    const setDataSpy = jasmine.createSpy('setData');

    const mockEvent = {
      dataTransfer: {
        setData: setDataSpy,
        effectAllowed: ''
      }
    } as unknown as DragEvent;

    component.dragStart(mockEvent);

    expect(component.dragging).toBeTrue();
    expect(setDataSpy).toHaveBeenCalledWith(
      'application/json',
      JSON.stringify(mockCard)
    );
    expect(mockEvent.dataTransfer!.effectAllowed).toBe('move');
  });

    it('deve finalizar o drag corretamente', () => {
    component.dragging = true;

    component.dragEnd();

    expect(component.dragging).toBeFalse();
  });

});
