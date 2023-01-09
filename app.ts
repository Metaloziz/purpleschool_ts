// Indexed Access Types


enum Sex {
  male,
  female
}

type UserType<T extends keyof typeof Sex> = {
  id: number

  role: T extends 'male' ? 'solder' : 'doctor'
}


const User: UserType<'male'> = {
  id: 10,

  role: "solder"
}


// OR

type UserType2<T extends Sex> = {
  id: number

  role: T extends Sex.male ? 'solder' : 'doctor'
}


const User2: UserType2<Sex.female> = {
  id: 10,

  role: "doctor"
}


