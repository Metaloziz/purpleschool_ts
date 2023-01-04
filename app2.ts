abstract class App2 {
  abstract send(N: number): string


  someNewMethod(N: number) { // обычный метод в котором можно обращаться к
    // абстрактному
    this.send(N)
  }

}


class Class1 extends App2 {
  send(N: number) {
    console.log(N)
    return N.toString();
  }


}


const b = new Class1()

b.someNewMethod(11)

