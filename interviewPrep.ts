
// 1. Basic Types
let age: number = 21;
let personName: string = "Alice";
let isActive: boolean = true;
let scores: number[] = [90, 80, 70];

// 2. Interfaces & Types
interface User {
  id: number;
  username: string;
  isAdmin?: boolean; // optional property
}
const user1: User = { id: 1, username: "bob" };

type Point = { x: number; y: number };
const p: Point = { x: 10, y: 20 };

// 3. Functions (with types)
function add(a: number, b: number): number {
  return a + b;
}
const greet = (person: string): string => `Hello, ${person}`;

// 4. Classes
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}
const dog = new Animal("Dog");
dog.speak();

// 5. Generics
function identity<T>(value: T): T {
  return value;
}
let num = identity<number>(123);
let str = identity<string>("abc");

// 6. Type Inference & Type Assertions
let inferred = 42; // TypeScript infers number
let someValue: any = "hello";
let strLength: number = (someValue as string).length;

// 7. Enums
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let dir: Direction = Direction.Up;

// 8. Union & Intersection Types
function printId(id: number | string) {
  console.log("ID:", id);
}
type A = { a: number };
type B = { b: string };
type AB = A & B;
const ab: AB = { a: 1, b: "hi" };


// 9. Type Guards
function isString(value: any): value is string {
  return typeof value === "string";
}

// 10. Type Aliases
type StringOrNumber = string | number;
type UserWithId = { id: number } & User;
// 11. Optional Chaining
interface Profile {
  name: string;
  age?: number;
  address?: {
    street: string;
    city: string;
  };
}


// Questions

//1
function sum(nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}
//2

interface Book {
  title: string;
  author: string;
  pages: number;
}

function getBookInfo(book: Book): string {
  return `${book.title} by ${book.author}, ${book.pages} pages`;
}

//3
function numberOrString(value: number | string): string {
  return typeof value === "number" ? `Number: ${value}` : `String: ${value}`;
}

// 4
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// 5
class Rectangle {
  constructor(public width: number, public height: number) { }

  area(): number {
    return this.width * this.height;
  }
}

// 6
function wrapInArray<T>(value: T): T[] {
  return [value];
}

// 7
type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  error?: string;
};

function handleApiResponse<T>(response: ApiResponse<T>): T | string | undefined {
  if (response.status === 'success') {
    return response.data;
  } else {
    return response.error ? response.error : undefined;
  }
}