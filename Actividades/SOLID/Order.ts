import { IOrder } from './IOrder';

export class Order implements IOrder {
    private items: { [key: string]: number } = {};

    addItem(item: string, price: number): void {
        this.items[item] = price;
    }

    calculateTotal(): number {
        return Object.values(this.items).reduce((a, b) => a + b, 0);
    }

    getItems(): string[] {
        return Object.keys(this.items);
    }
}