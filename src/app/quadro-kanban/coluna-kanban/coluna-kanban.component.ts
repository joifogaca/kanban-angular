import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coluna-kanban',
  standalone: true,
  imports: [],
  templateUrl: './coluna-kanban.component.html',
  styleUrl: './coluna-kanban.component.scss'
})
export class ColunaKanbanComponent {

  @Input({ required: true }) nomeColuna!: string;

}
