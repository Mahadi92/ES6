// Destructing Object
const person = {
    name: 'Mahadi',
    age: 17,
    job: 'Web-devloper',
    gfName: 'Arabi',
    area: 'New york'
}
const pName = person.name; // old way
console.log(pName);

// const {
//     name
// } = person; // single porperty show
// console.log(name);

const {
    name,
    age,
    job,
    gfName,
    area
} = person; // Multiple porperty show
console.log(name, age, job, gfName, area);