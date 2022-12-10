const App = (x: string | number): x is string => {

  return typeof x === 'string'

}


console.log(App('1'))


// более наглядно на сложном типе

type User = {
  id: string
}

type Admin = {
  id: string
  role: 'admin'
}

function isAdmin(arg: User | Admin): arg is Admin {

  // return 'role' in arg
  // or
  return (arg as Admin).role !== undefined

}

// эта функция сужает тип при использовании её в if...else


function foo (arg: User | Admin){

  if(isAdmin(arg)){
    arg
   // внутри arg есть ДВА ключа
  } else {
    arg
    // внутри arg есть ОДИН ключ
  }


}
