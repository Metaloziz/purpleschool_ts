type User = {
  id: number
  age: number
}

type User2 = {
  sex?: boolean
}

type User3 = User | User2

let a: User3 = {
  id: 1,
  age: 10,
  sex: false
}

type User4 = User & User2

let b: User4 = {
  id: 1,
  age: 10,
  sex: false
}

