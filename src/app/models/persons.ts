export class Person {
  id: number;
  name: string;
  lastName:string;
  age: number;

  constructor(id: number, firstName: string, lastName: string, age: number) {
    this.id = id;
    this.name = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
