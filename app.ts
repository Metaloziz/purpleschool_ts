enum PaymentStatus {
  Holding,
  Process,
  Reversed
}


class Payment {
  id: number
  status = PaymentStatus.Holding
  creatAt = new Date()
  updateAt: Date

  constructor(id: number) {
    this.id = id

  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.creatAt.getTime()
  }

  unholdPayment(): void {
    if (this.status === PaymentStatus.Process) {
      throw  new Error('Платёж не может быть возвращён!')
    }
    this.status = PaymentStatus.Reversed
    this.updateAt = new Date()

  }
}


const payment = new Payment(1)

payment.unholdPayment()
console.log(payment)

const time = payment.getPaymentLifeTime()


console.log(time);






