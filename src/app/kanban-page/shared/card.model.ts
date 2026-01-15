export const CARD_STATUS = {
  BACKLOG: 'backlog',
  DOING: 'doing',
  REVIEW: 'review',
  DONE: 'done'
} as const;

export const CARD_PRIORIDADE = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
} as const;

export type CardStatus = typeof CARD_STATUS[keyof typeof CARD_STATUS];

export type Prioridade = typeof CARD_PRIORIDADE[keyof typeof CARD_PRIORIDADE];

export interface Responsavel {
  id: number;
  nome: string;
  email: string;
  foto: string;
  }

export interface Card {
  id: string;
  titulo: string;
  descricao: string;
  responsavel: Responsavel;
  status: CardStatus;
  dataCriacao: Date;
  prioridade: Prioridade;
}
