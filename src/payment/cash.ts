import { PaymentMethod } from './paymentMethod.interface';

export class Cash implements PaymentMethod {
  pay(amount: number): number {
    return amount;
  }
}
