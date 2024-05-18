export interface IOrder {
    calculateTotal(): number;
    getItems(): string[];
}