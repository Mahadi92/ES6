// parent class
class Parent {
    constructor() {
        this.fatherName = "Md.Idrish Mia";
    }
}
// child class 
class Child extends Parent {
    constructor(name) {
        super() // calling parent constructor
        this.name = name;
    }
}
const baby1 =new Child('Mahadi Hasan');
console.log(baby1);
const baby2 =new Child('Mahabub Hasan')
console.log(baby2);