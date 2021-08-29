import { Desafio } from "./Desafio";

export interface Aula {
  nome: string;
  video: string;
  revisao: string;
  desafio: Desafio;
}