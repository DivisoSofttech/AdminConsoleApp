/* tslint:disable */
import { CancellationRequest } from './cancellation-request';
import { Sort } from './sort';
export interface PageOfCancellationRequest {
  content?: Array<CancellationRequest>;
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
