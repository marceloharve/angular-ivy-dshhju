import { Aula } from "./aula";

export interface Modulo {
  nome : string;
  aulas : Aula[];
  checked? : boolean;
  atual?: boolean;
}