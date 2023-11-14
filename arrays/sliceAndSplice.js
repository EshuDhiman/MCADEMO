// diff b/w slice and splice is that splice manuplates the original array and slice doesnt splice takes the range and returns a new array
let heros = ["ironman", "captain america","spiderman"]
let villans = new Array("thanos","dr doom","kang")

console.log(heros.slice(0,1));
console.log(heros); // doesnt change the actuall array

let teamV = villans.splice(0,1) // returns a new array , pop out the value and adds to new array and return that new array
console.log(teamV);
console.log(villans); // origional array is changed and 