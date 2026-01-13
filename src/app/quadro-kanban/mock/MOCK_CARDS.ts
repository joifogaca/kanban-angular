import { Card, CARD_STATUS } from "../shared/card.model";
import { MOCK_RESPONSAVEIS } from "./MOCK_RESPONSAVEIS";

export const MOCK_CARDS: Card[] = [
  {
    id: 1,
    titulo: 'Implementar sistema de login',
    descricao: 'Criar tela de login com autenticação JWT e validação de credenciais',
    responsavel: MOCK_RESPONSAVEIS[0], // Ana Silva
    status: CARD_STATUS.BACKLOG,
    dataCriacao: new Date('2024-01-10T09:00:00')
  },
  {
    id: 2,
    titulo: 'Refatorar componente de tabela',
    descricao: 'Melhorar performance e adicionar funcionalidade de ordenação',
    responsavel: MOCK_RESPONSAVEIS[1], // Carlos Santos
    status: CARD_STATUS.DOING,
    dataCriacao: new Date('2024-01-12T14:30:00')
  },
  {
    id: 3,
    titulo: 'Criar documentação da API',
    descricao: 'Documentar endpoints e exemplos de uso para desenvolvedores',
    responsavel: MOCK_RESPONSAVEIS[2], // Beatriz Oliveira
    status: CARD_STATUS.review,
    dataCriacao: new Date('2024-01-08T11:15:00')
  },
  {
    id: 4,
    titulo: 'Dashboard de métricas',
    descricao: 'Desenvolver dashboard com gráficos de performance e KPIs',
    responsavel: MOCK_RESPONSAVEIS[3], // Pedro Almeida
    status: CARD_STATUS.done,
    dataCriacao: new Date('2024-01-05T10:00:00')
  },
  {
    id: 5,
    titulo: 'Testes de integração',
    descricao: 'Implementar testes end-to-end para fluxo de compra',
    responsavel: MOCK_RESPONSAVEIS[4], // Fernanda Costa
    status: CARD_STATUS.DOING,
    dataCriacao: new Date('2024-01-15T16:45:00')
  },
  {
    id: 6,
    titulo: 'Otimização de performance',
    descricao: 'Reduzir tempo de carregamento da página inicial',
    responsavel: MOCK_RESPONSAVEIS[5], // Ricardo Lima
    status: CARD_STATUS.BACKLOG,
    dataCriacao: new Date('2024-01-14T13:20:00')
  }
];
