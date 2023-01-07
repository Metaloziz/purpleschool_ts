type Car = {

  speed: number
}


type FunType<T extends Car> = (car: T) => number
// T автоматически должен быть объектом


let fun: FunType<Car> = (car) => {


  let result = car.speed * 0.62

  console.log(result)

  return result

}


const BMW: Car = {speed: 160}

fun(BMW)
