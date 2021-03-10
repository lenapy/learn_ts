
enum Role { ADMIN = 5, READ_ONLY, AUTHOR } 
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     roleTuple: [number, string]; // tuple type, in js will be simple array
// } = {
const person = {
    name: 'Helen',
    age: 30, 
    hobbies: ['Sports', 'Cooking'],
    roleTuple: [2, 'author'],
    roleEnum: Role.ADMIN,
};

// person.roleTuple.push('admin'); // exception that is allowed in tuples
// person.roleTuple[1] = 10;

// person.rroleTuple = []; isn't allowed
// person.roleTuple = [1, 'test', 'test2']; isn't allowed

console.log(person); 

// let activities: any[];
// activities = ['Sports', 1];

let activities: string[];
activities = ['Sports'];

// loop over hobbies
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !! ERROR !!
}
 