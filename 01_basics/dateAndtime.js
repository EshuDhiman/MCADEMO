let d = new Date()
// console.log(typeof d);
// console.log(d.toDateString());
// console.log(d.toLocaleString());
// console.log(d.toISOString());
// console.log(d.toJSON());
const myBirth = new Date(2001,5,21).toDateString()
console.log(myBirth);
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(d.getTime());// time stamp in miliseconds
console.log(Math.floor(Date.now()/1000));// conversions in seconds
console.log(d.getMonth()+1);

console.log(d.toLocaleString('default',{
    weekday: "long",
    era:"short"
}));