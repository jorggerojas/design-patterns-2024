import { IPayment } from './IPayment';

export class Payment implements IPayment {
    pay(amount: number): void {
        console.log(`Paid ${amount} successfully.`);
    }
}