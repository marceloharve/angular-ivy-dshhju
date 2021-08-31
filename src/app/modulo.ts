import { Aula } from "./aula";

export interface Modulo {
  nome : string;
  aula: number;
  aulas : Aula[];
  checked? : boolean;
  atual?: boolean;
}