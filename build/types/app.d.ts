declare abstract class App {
    abstract send(N: number): string;
    someNewMethod(N: number): void;
}
declare class Class extends App {
    send(N: number): string;
}
declare const a: Class;
type SomeType = {
    id: number;
};
