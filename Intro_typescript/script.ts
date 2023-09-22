//let num = 5;
// let num: number = 5;
// let str: string = "Vladimir";
// let bool: boolean = true;
// let samthing: any = 10;
// samthing = "Vladimir";
// console.log(str);

// let arr: number[] = [1, 2, 3, 4, 5, 6];
// let arr2: Array<number> = [1, 2, 3, 4, 5];

// enum Color {
//     Red,
//     Green,
//     Blue
// };

// let color = Color.Red;

// let tuple: [string, number] = ["Vladimir", 41];
// console.log(tuple[0]);
// console.log(tuple[1]);

// function foo(name: string, age: number) {
//     console.log(name + " " + age);
    
// }

// let result = foo("Vladimir", 41);
// result;

// function foo(): string {
//     return "Vladimir";
// }

// console.log(foo());

// let foo = (): string => "Vladimir";
// console.log(foo());

// enum Gender {
//     Male,
//     Female
// }

// interface Person {
//     name: string;
//     age: number;
//     gender?: Gender
// }

// let p: Person = {
//     name: "Vladimir",
//     age: 41,
//     gender: Gender.Male
// };

// function printPerson(p: Person) {
//     // console.log(p.name + " " + p.age);
//     console.log(`${p.name}  ${p.age} ${(p.gender !== undefined) ? p.gender : ""}`);
    
// }
// printPerson(p);

enum Gender {
    Male,
    Female
}

// class Person {
//     name: string = "Unknown";
//     age: number = 0;
//     gender?: Gender;

//     constructor(age: number, name: string, gender?: Gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
        
//     }
// }

// class Person {
    
// //readonly id: number = 1;
// static count: 0;
//     constructor(
//         public readonly id: number,
//        public age: number, 
//        public name: string, 
//        public gender?: Gender
//         ) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.id = Person.count++;
//     }
// }

// interface ITest {

// }

// interface ITest2 {
    
// }

// interface IPrintable {
//     porint(): void;
// }

// class Student extends Person implements ITest, ITest2, IPrintable {
//     constructor(age: number, name: string, gender?: Gender) {
//         super(1, age, name, gender);
//     }
//     porint(): void {
//         //throw new Error("Method not implemented.");
//         console.log("Print Student");
//     }
// }

// let p = new Person(1, 41, "Vladimir", Gender.Male);

// function printPerson(p: Person) {
//     // console.log(p.name + " " + p.age);
//     console.log(`${p.id} ${p.name}  ${p.age} ${(p.gender !== undefined) ? p.gender : ""}`);
    
// }
// printPerson(p);

// class MyClass {
//     private arr: number[] = [];

//     add(num: number) {
//         this.arr.push(num);
//     }
//     pop() {
//         this.arr.pop();
//     }
//     print(): void {
//         for (const num of this.arr) {
//             console.log(num + '');
//         }
//     }
// }

// let myClass: MyClass = new MyClass();
// myClass.add(10);
// myClass.add(11);
// myClass.add(12);
// myClass.print();
// console.log('====================================');
// console.log();
// console.log('====================================');
// myClass.pop();
// myClass.print();

// class MyClass<T> {
//     private arr: T[] = [];

//     add(num: T) {
//         this.arr.push(num);
//     }
//     pop() {
//         this.arr.pop();
//     }
//     print(): void {
//         for (const num of this.arr) {
//             console.log(num + '');
//         }
//     }
// }

// let myClass: MyClass<string> = new MyClass();
// myClass.add("Vladimir");
// myClass.add("Farid");
// myClass.add("Oleq");
// myClass.print();
// console.log('====================================');
// console.log();
// console.log('====================================');
// myClass.pop();
// myClass.print();

// let myClass2: MyClass<number> = new MyClass();
// myClass2.add(10);
// myClass2.add(11);
// myClass2.add(12);
// myClass2.print();
// console.log('====================================');
// console.log();
// console.log('====================================');
// myClass2.pop();
// myClass2.print();

// interface Func {
//     (text: string): void;
// }

// function Print(text:string): void {
//     console.log(text);
// }

// function PrintUpper(text:string): void {
//     console.log(text.toUpperCase());
// }

// let func: Func;
// func = Print;
// func("Vladimir");
// func = PrintUpper;
// func("Vladimir");

// function Test(func: Func, text: string) {
//     func(text);
// }

// Test(PrintUpper, "Hello");
// Test(Print, "Hello");
// Test(x=>x.length,"Hello");

// namespace Test {
    
// }


// import {Person,Car} from 'Test';
import * as lib from 'Test';

let p: lib.Person;
let c: lib.Car;

document.getElementById("");