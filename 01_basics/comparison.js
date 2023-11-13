console.table("2">1);
console.table(["02">1,null==0,null<0,null>=0]);
// null is converted into 0 thats why we get the shocking  result 
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<=0);
// will always give false when compared with undefined 
//=== strict compare check will also check data type 
console.table(["2"==2,"2"===2]);
// this all conversions are for edu purposes but avoide this type of stuff
let a = [1,2,"3"]
console.log(typeof a);