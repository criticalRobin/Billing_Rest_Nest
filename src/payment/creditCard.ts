import { PaymentMethod } from './paymentMethod.interface';

export class CreditCard implements PaymentMethod {
  pay(amount: number): number {
    const amountWithFee: number = amount + 1;

    return amountWithFee;
  }
}
