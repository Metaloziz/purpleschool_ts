class User {
  name: string

  constructor(name?: string) {

    this.name = name ?? 'no name'

  }

}

const user = new User()
console.log(user)

