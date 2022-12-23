class User {
  private _login: string
  createdAt: Date

  set login(text: string) {
    this._login = 'LOGIN-' + text
    this.createdAt = new Date() // side effect
  }

  get login() {
    return this._login
  }

}


let user = new User()

user.login = 'Andrew'


console.log(user);
console.log(user.login);
