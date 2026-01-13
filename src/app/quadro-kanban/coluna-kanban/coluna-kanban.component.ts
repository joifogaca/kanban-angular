import { Component, Input } from '@angular/core';
import { Card } from '../shared/card.model';

@Component({
  selector: 'app-coluna-kanban',
  standalone: true,
  imports: [],
  templateUrl: './coluna-kanban.component.html',
  styleUrl: './coluna-kanban.component.scss'
})
export class ColunaKanbanComponent {

  @Input({ required: true }) nomeColuna!: string;
  @Input({ required: true }) cards!: Card[];

}
