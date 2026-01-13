import { Component } from '@angular/core';
import { ColunaKanbanComponent } from "./coluna-kanban/coluna-kanban.component";
import { CardService } from './shared/card.service';
import { Card } from './shared/card.model';

@Component({
  selector: 'app-quadro-kanban',
  standalone: true,
  imports: [ColunaKanbanComponent],
  templateUrl: './quadro-kanban.component.html',
  styleUrl: './quadro-kanban.component.scss'
})
export class QuadroKanbanComponent {

  cards: Card[] = [];
  constructor(private readonly cardService: CardService) {
    this.cards = this.cardService.getCards(); 
  }

}
