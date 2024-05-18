import { IOrder } from "./IOrder";

export interface IOrderProcessor {
    processOrder(order: IOrder): void;
}