//abierta para la extensión pero cerrada para la modificación
abstract class Customer {
    public abstract calculateDiscount(amount: number): number;
}

class RegularCustomer extends Customer {
    public calculateDiscount(amount: number): number {
        return amount * 0.9; // 10% de descuento
    }
}

class PremiumCustomer extends Customer {
    public calculateDiscount(amount: number): number {
        return amount * 0.8; // 20% de descuento
    }
}

class VipCustomer extends Customer {
    public calculateDiscount(amount: number): number {
        return amount * 0.7; // 30% de descuento
    }
}

// Función que aplica el descuento
function applyDiscount(customer: Customer, amount: number): number {
    return customer.calculateDiscount(amount);
}

// Uso
const regularCustomer = new RegularCustomer();
console.log("Regular Customer pays: " + applyDiscount(regularCustomer, 100));

const premiumCustomer = new PremiumCustomer();
console.log("Premium Customer pays: " + applyDiscount(premiumCustomer, 100));

const vipCustomer = new VipCustomer();
console.log("VIP Customer pays: " + applyDiscount(vipCustomer, 100));
