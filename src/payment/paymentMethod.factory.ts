import { Cash } from './cash';
import { CreditCard } from './creditCard';
import { PaymentMethod } from './paymentMethod.interface';
import { WireTransfer } from './wireTransfer';

export class PaymentMethodFactory {
  static createPaymentMethod(type: string): PaymentMethod {
    type = type.toLowerCase();

    if (type === 'tarjeta') {
      return new CreditCard();
    } else if (type === 'efectivo') {
      return new Cash();
    } else if (type === 'transferencia') {
      return new WireTransfer();
    } else {
      throw new Error('Tipo de pago no soportado');
    }
  }
}
