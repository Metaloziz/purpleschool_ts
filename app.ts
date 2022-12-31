class UserService {
  static staticKey: string = 'asd'

  getData() {
    return UserService.staticKey // только так, через this не обратиться
  }

}


let user = new UserService()
user.staticKey // в экземпляре нет этого ключа

console.log(UserService.staticKey); // он есть у самого класса
