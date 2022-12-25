class Age {
  age

  constructor(age: number) {
    this.age = age
  }
}

class Name {
  name

  constructor(name: string) {
    this.name = name
  }
}


class User {

  age: Age
  name: Name

  constructor(age: Age, name: Name) {
    this.age = age
    this.name = name
  }

}

// отличие от наследования - здесь мы можем каждую сущность менять независимо от
// других


