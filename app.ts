class User {
  age: number

  name: string

  constructor(age: number) {
    this.age = age
  }

  setName() {
    this.name = 'Default'
  }
}


class SupperUser extends User {

  constructor() {

    const age = Math.random()
    super(age);
  }

  override setName() {
    super.setName(); // если мы хотим переопределить метод то обязательно нужно
    // вызвать прошлый через super, чтобы при изменении исходного метода не
    // исправлять его везде


    // делаем то хотим

  }

}
