/* tslint:disable */
import { CancellationRequest } from './cancellation-request';
import { CancelledAuxilaryOrderLine } from './cancelled-auxilary-order-line';
import { CancelledOrderLine } from './cancelled-order-line';
export interface CancellationDetails {
  cancellationRequest?: CancellationRequest;
  cancelledAuxilaryOrderLines?: Array<CancelledAuxilaryOrderLine>;
  cancelledOrderLines?: Array<CancelledOrderLine>;
  id?: number;
}
