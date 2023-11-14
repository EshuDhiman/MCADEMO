let heros = ["ironman", "captain america","spiderman"]
let villans = new Array("thanos","dr doom","kang")

//spread 
const herosVillans = [...heros, ...villans] // combines array we can also use console.log(heros.concat(villans));
console.log(herosVillans);
// imp methods 
console.log(Array.from("eshu")); // sim toCharArray but instead of char its string of java this will only create a array of an itrateable object 
const a =Array.from(herosVillans);
console.log(typeof a[2]);
// for numerics or non iteratable stuff we can use .of()
let l1 =20
let l2 =120
let l3 =230
let arr = Array.of(l1,l2,l3)
console.log(arr)