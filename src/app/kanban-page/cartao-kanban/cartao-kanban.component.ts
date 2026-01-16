import { Component, Input } from '@angular/core';

import { NgClass } from '@angular/common';
import { Card } from '../shared/card.model';

@Component({
  selector: 'app-cartao-kanban',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cartao-kanban.component.html',
  styleUrl: './cartao-kanban.component.scss'
})
export class CartaoKanbanComponent {

  @Input({ required: true }) card!: Card;
  dragging: boolean = false;

  dragStart(event: DragEvent): void {
    this.dragging = true;
    event.dataTransfer?.setData(
    'application/json',
    JSON.stringify(this.card)
  );

  event.dataTransfer!.effectAllowed = 'move';
   }

   dragEnd(): void {
    this.dragging = false;
   }

}
