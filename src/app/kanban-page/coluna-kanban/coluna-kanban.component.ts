import { Component, Input } from '@angular/core';

import { TitleCasePipe } from '@angular/common';
import { CartaoKanbanComponent } from "../cartao-kanban/cartao-kanban.component";
import { Card, CardStatus } from '../shared/card.model';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-coluna-kanban',
  standalone: true,
  imports: [CartaoKanbanComponent,  TitleCasePipe],
  templateUrl: './coluna-kanban.component.html',
  styleUrl: './coluna-kanban.component.scss',
  host: {
    '[style.--after-color]': 'afterColor'
  }
})
export class ColunaKanbanComponent {

  @Input({ required: true }) afterColor: string = '#d573b6';
  @Input({ required: true }) nomeColuna!: CardStatus;
  @Input({ required: true }) cards!: Card[];

  constructor(private readonly cardService: CardService){}

  card_over: boolean = false;
  onDragover(event: DragEvent){
    event.preventDefault();
    this.card_over = true;
  }

  onDragleave(event: DragEvent){
    event.preventDefault();
    this.card_over = false;
  }

  onDrop(event: DragEvent) {
  event.preventDefault();

  const data = event.dataTransfer?.getData('application/json');
  if (!data) return;

  const card: Card = JSON.parse(data);

  this.cardService.moveCard(card.id, this.nomeColuna);
}

}
