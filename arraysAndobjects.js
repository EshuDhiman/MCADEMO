const arr = [
    { userId: 1, mail: "ksnda" },
     {userId:2,mail:"sdaff"}, 
     {userId:3,mail:"sda"}
    ];
arr[1].mail
const user = {
    user_name1: "eshu",
    isLoggedIn1: true, 
    lastLoginDays1: ["monday", "wenesday"],
    address1:{
        streeyt1:"101",
        houseNO1:198
    }
  };
  console.log(Object.keys(user)); //returns array
 let n = Object.keys(user)
 console.log(Object.entries(user));
 console.log(user.hasOwnProperty("isLoggedIn1")); // returns if the property consist in a object or not returns boolean


