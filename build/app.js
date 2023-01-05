"use strict";
class App {
    someNewMethod(N) {
        this.send(N);
    }
}
class Class extends App {
    send(N) {
        console.log(N);
        return N.toString();
    }
}
const a = new Class();
a.someNewMethod(11);
//# sourceMappingURL=app.js.map