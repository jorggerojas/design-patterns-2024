import { Order } from './Order';
import { Payment } from './Payment';
import { OrderProcessor } from './OrderProcessor';

const order = new Order();
order.addItem('item1', 50);
order.addItem('item2', 100);

const payment = new Payment();
const orderProcessor = new OrderProcessor(payment);

orderProcessor.processOrder(order);