// Indexed Access Types

type UserType = {
  id: number

  age: {
    count: number
    sex: boolean
  }
}

type NewIndexTypeFromUseType = UserType['age']


let A: NewIndexTypeFromUseType = {count: 90, sex: false}
