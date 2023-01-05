abstract class App {
  abstract send(N: number): string


  someNewMethod(N: number) { // обычный метод в котором можно обращаться к
    // абстрактному
    this.send(N)
  }

}


class Class extends App {
  send(N: number) {
    console.log(N)
    return N.toString();
  }


}


const a = new Class()

a.someNewMethod(11)


type SomeType = {
  id: number
}


// some comment

