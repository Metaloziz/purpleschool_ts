type Car = {
    speed: number;
};
type FunType<T extends Car> = (car: T) => number;
declare let fun: FunType<Car>;
declare const BMW: Car;
