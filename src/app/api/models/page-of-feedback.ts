/* tslint:disable */
import { Feedback } from './feedback';
import { Sort } from './sort';
export interface PageOfFeedback {
  content?: Array<Feedback>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
