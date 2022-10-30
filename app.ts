const skill: [number, string] = [1, 'power']


const skill2: [number, string, ...boolean[]] = [1, 'power', true, false, false]


type A = {
  title: string,
  age: number
}

type B = {
  power: number
}

type C = A & B

let objA: Partial<C> = {}
