export const CARD_STATUS = {
  BACKLOG: 'backlog',
  DOING: 'doing',
  review: 'review',
  done: 'done'
} as const;

export type CardStatus = typeof CARD_STATUS[keyof typeof CARD_STATUS];

export interface Responsavel {
  id: number;
  nome: string;
  email: string;
  foto: string;
  }

export interface Card {
  id: number;
  titulo: string;
  descricao: string;
  responsavel: Responsavel;
  status: CardStatus;
  dataCriacao: Date;
}
