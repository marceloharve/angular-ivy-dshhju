import { TopicoAula } from "./aula";

export interface Modulo {
  nome : string;
  aula: number;
  aulas : TopicoAula[];
  checked? : boolean;
  atual?: boolean;
}