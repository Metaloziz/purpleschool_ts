class Vehicle {
  private _damage: string[] = []

  public make: string = 'bmw'
  #year: string = '2023'

  get damage() {
    return this._damage
  }

  get year() {
    return this.#year
  }


  addDamage(damage: string) {

    this._damage.push(damage)
    return this._damage

  }

}

const car = new Vehicle()

console.log(car.addDamage('1'));


