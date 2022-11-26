type User = {
  id: number
  age?: number
}

let a: User = {
  id: 10
}


const foo = () => {
  console.log('')
}

let b = foo()


const foo2 = () => {
  return typeof b
}

let c = foo2()

console.log(c)
