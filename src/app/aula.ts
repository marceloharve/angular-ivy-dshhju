import { Desafio } from "./desafio";

export interface Aula {
  nome: string;
  video: string;
  revisao: string;
  desafio: Desafio;
}