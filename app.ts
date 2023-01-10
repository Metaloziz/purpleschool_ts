// Indexed Access Types


type Roles = 'admin' | 'student' | 'parent'


type MapperType<T> = {
  [key in keyof T]: Roles
}

type UserType2 = {
  user1: any
  user2: any
  user3: any

}

type ConvertAllKeysType = MapperType<UserType2>


let AA22: ConvertAllKeysType = {
  user1: 'admin',
  user2: 1,   // все типы ANY заменились
  user3: null
}


type UsersType = {

  [key: string]: Roles

}


let a: UsersType = {
  'asdsd': "admin"
}
