import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kanban-page/quadro-kanban/quadro-kanban.component').then(m => m.QuadroKanbanComponent)
  }
];
