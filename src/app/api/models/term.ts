/* tslint:disable */
import { SubTerm } from './sub-term';
export interface Term {
  id?: number;
  subTerms?: Array<SubTerm>;
  title?: string;
}
