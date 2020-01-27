/*If we call rabbit.eat(), 
which object receives the full property: animal or rabbit?.
*/

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat(); //rabbit will receive the full property

//proof
console.log(animal);
console.log(rabbit);