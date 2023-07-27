// Static Methods and Properties
class Governor {
  static characteristic1 = "understanding of community needs";
  static characteristic2 = "leadership skills";
  static characteristic3 = "command skills";

  static qualified() {
    console.log("this person qualifies for Governor");
  }
  static pending() {
    console.log("this person's qualification is pending");
  }
}

console.log(Governor.characteristic1);
console.log(Governor.characteristic2);
console.log(Governor.characteristic3);
console.log(Governor.qualified);
console.log(Governor.pending);

//Inheritance
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  sayHi(){
    console.log(`${this.name} is waving Hi`);
  }
  heartPumping(){
    console.log(`${this.name} heart is pumping`);
  }
  think(){
    console.log(`${this.name}is thinking...`);
  }
}

//Postal Worker
class PostalWorker extends Person{
    constructor(name, age, gender){
        super(name, age, gender);
    }
    deliverMail(){
        console.log(`${this.name} is out delivering`);
    }
    collectMail(){
        console.log(`${this.name} is collecting mails`);
    }
}

//Chef 
class Chef extends Person{
    constructor(name, age, gender){
        super(name, age, gender);
    }
    cook(){
        console.log(`${this.name} is cooking`);
    }
    source(){
        console.log(`${this.name} is sourcing for ingredients`);
    }
}

const postWorker1 = new PostalWorker('Jon', 29, 'M');
console.log(postWorker1.deliverMail);
console.log(postWorker1.collectMail);
const postWorker2 = new PostalWorker('Jane', 29, 'F');
console.log(postWorker2.deliverMail);
console.log(postWorker2.collectMail);

const chef1 = new Chef('Jon', 29, 'M');
console.log(chef1.cook);
console.log(chef1.source);
const chef2 = new Chef('Ang', 24, 'F');
console.log(chef2.cook);
console.log(chef2.source);