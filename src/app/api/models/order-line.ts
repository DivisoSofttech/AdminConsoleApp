/* tslint:disable */
import { AuxItem } from './aux-item';
import { ComboItem } from './combo-item';
import { OrderMaster } from './order-master';
export interface OrderLine {
  auxItems?: Array<AuxItem>;
  comboItems?: Array<ComboItem>;
  id?: number;
  item?: string;
  orderMaster?: OrderMaster;
  quantity?: number;
  total?: number;
}
