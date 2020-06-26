export class Ingredient {
  // method 1: basic OOP paradigm
  // public name: string;
  // public amount: number;

  // constructor(name: string, amount: number) {
  //   this.name = name;
  //   this.amount = amount;
  // }

  // method 2: TypeScript will compile the below code as the same result with method 1
  constructor(public name: string, public amount: number) { }
}
