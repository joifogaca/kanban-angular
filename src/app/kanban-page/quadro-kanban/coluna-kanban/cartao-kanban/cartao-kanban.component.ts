import { Component, Input } from '@angular/core';
import { Card } from '../../shared/card.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cartao-kanban',
  standalone: true,
  imports: [NgClass],
  templateUrl: './cartao-kanban.component.html',
  styleUrl: './cartao-kanban.component.scss'
})
export class CartaoKanbanComponent {

  @Input({ required: true }) card!: Card;

}
