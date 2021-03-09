// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Helen',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
console.log(person);
// let activities: any[];
// activities = ['Sports', 1];
var activities;
activities = ['Sports'];
// loop over hobbies
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !! ERROR !!
}
