class PaymentProcessor {
    private paymentGateway: PaymentGateway;

    constructor(paymentGateway: PaymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    processPayment(amount: number) {
        this.paymentGateway.processPayment(amount);
    }
}

interface PaymentGateway {
    processPayment(amount: number): void;
}

class PayPalGateway implements PaymentGateway {
    processPayment(amount: number) {
        console.log(`Processing payment of $${amount} via PayPal...`);
    }
}

class StripeGateway implements PaymentGateway {
    processPayment(amount: number) {
        console.log(`Processing payment of $${amount} via Stripe...`);
    }
}


const paymentProcessor = new PaymentProcessor(new PayPalGateway());
paymentProcessor.processPayment(100);

class SquareGateway implements PaymentGateway {
    processPayment(amount: number) {
        console.log(`Procesando pago de $${amount} a través de Square...`);
    }
}

const squarePaymentProcessor = new PaymentProcessor(new SquareGateway());
squarePaymentProcessor.processPayment(200);