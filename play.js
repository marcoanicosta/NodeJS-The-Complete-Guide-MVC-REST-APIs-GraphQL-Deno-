const person = {
    name: 'Max',
    age: 29,
    greet()  {
        console.log('Hi, I am ' + this.name);
    }
};

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//     //console.log(hobby);
// }

// console.log(hobbies.map(hobby =>  'Hobby: ' + hobby));
// console.log(hobbies); 
// hobbies.push('Programming');
// console.log(hobbies);
const copiedArray = [...hobbies]
console.log(copiedArray);

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]
};

console.log(toArray(1,2,3));