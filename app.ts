// потеряй контекст

class Payment {
  private date: Date = new Date()

  getDate(this: Payment) { // Фиксация контекста, чтобы мы даже потерять его не
    // смогли. Существует только в TS
    return this?.date
  }
}

const NewObj = {
  date: 'error'
}


const item = new Payment()

let func = item.getDate

console.log(func.bind(NewObj)());
