// class Person {
//     public constructor(private name: string) {}
//
//     public getName(): string {
//         return this.name;
//     }
// }
//
// const person = new Person('Yuvi');
// console.log(person.getName());  // Output the name

// // INHERITANCE
// interface Shape {
//     getArea: () => number;
// }
//
// class Rectangle implements Shape {
//     public constructor(private readonly width: number, protected readonly height: number) {}
//
//     public getArea(): number {
//         return this.width * this.height;
//     }
// }
//
// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.getArea());  // Outputs: 50




// abstract class Polygon {
//     public abstract getArea(): number;
//
//     public toString(): string {
//         return `Polygon[area=${this.getArea()}]`;
//     }
// }
//
// class Rectangle extends Polygon {
//     public constructor(protected readonly width: number, protected readonly height: number) {
//         super();
//     }
//
//     public getArea(): number {
//         return this.width * this.height;
//     }
// }