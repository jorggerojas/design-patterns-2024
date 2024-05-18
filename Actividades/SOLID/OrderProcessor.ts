import { IOrderProcessor } from './IOrderProcessor';
import { IOrder } from './IOrder';
import { IPayment } from './IPayment';

export class OrderProcessor implements IOrderProcessor {
    private payment: IPayment;

    constructor(payment: IPayment) {
        this.payment = payment;
    }

    processOrder(order: IOrder): void {
        const total = order.calculateTotal();
        this.payment.pay(total);
        console.log('Order processed successfully.');
    }
}