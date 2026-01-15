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

  dragStart(): void {
    this.dragging = true;
   }

   dragEnd(): void {
    this.dragging = false;
   }

}
