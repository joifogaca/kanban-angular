import { Component, Signal } from '@angular/core';
import { ColunaKanbanComponent } from "../coluna-kanban/coluna-kanban.component";
import { Card, CARD_STATUS, CardStatus } from '../shared/card.model';
import { CardService } from '../shared/card.service';


@Component({
  selector: 'app-quadro-kanban',
  standalone: true,
  imports: [ColunaKanbanComponent],
  templateUrl: './quadro-kanban.component.html',
  styleUrl: './quadro-kanban.component.scss'
})
export class QuadroKanbanComponent {


  backlogCards!: Signal<Card[]>;
  doingCards!: Signal<Card[]>;
  reviewCards!: Signal<Card[]>;
  doneCards!: Signal<Card[]>;


  constructor(private readonly cardService: CardService) {
    this.backlogCards = this.cardService.cardsByStatus('backlog');
    this.doingCards = this.cardService.cardsByStatus('doing');
    this.reviewCards = this.cardService.cardsByStatus('review');
    this.doneCards = this.cardService.cardsByStatus('done');

  }

}
