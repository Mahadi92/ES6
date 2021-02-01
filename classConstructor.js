// creat object form class 
class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Comilla Cantonment High School"; // default value for all object 
    }
}
const student1 = new Student(2, "Mahadi");
const student2 = new Student(3, "Aminul");
console.log(student1);
console.log(student2);