import { Component } from '@angular/core';
import { ColunaKanbanComponent } from "./coluna-kanban/coluna-kanban.component";

@Component({
  selector: 'app-quadro-kanban',
  standalone: true,
  imports: [ColunaKanbanComponent],
  templateUrl: './quadro-kanban.component.html',
  styleUrl: './quadro-kanban.component.scss'
})
export class QuadroKanbanComponent {

}
