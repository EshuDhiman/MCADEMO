//stack 
let userName = "eshu"
let anotherName = userName
anotherName = "abc"// here new copy of userName variable which was created to be assigned to anotherName variable will be changed not the actucal original userName value this phenomena is called call by value 
console.table([userName,anotherName]);
//heap
let user = {
    userName : "eshu"
    
}
console.log("value of user obj", user.userName );
let user2 = user
user2.userName = "not eshu" // changes made in user2 will affect the original user becouse objects are stored in heap memomer and are treated as by the pricipal of call by refrence which is nothing but there will be no copies of data and will point to the safe reference of the data
console.table([user,user2]);