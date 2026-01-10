import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./quadro-kanban/quadro-kanban.component').then(m => m.QuadroKanbanComponent)
  }
];
