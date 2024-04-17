import { PaymentMethod } from './paymentMethod.interface';

export class WireTransfer implements PaymentMethod {
  pay(amount: number): number {
    const amountWithFee: number = amount + 2;

    return amountWithFee;
  }
}
