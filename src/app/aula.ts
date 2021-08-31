import { TopicoAula } from "./topicoaula";

export interface Aula {
  nome : string;
  CP : string;
  MensagemBoasVindas : string;
  aula: number;
  topicos : TopicoAula[];
  checked? : boolean;
  atual?: boolean;
}