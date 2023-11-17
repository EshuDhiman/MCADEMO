const user = {
    user_name1: "eshu",
    isLoggedIn1: true, 
    lastLoginDays1: ["monday", "wenesday"],
    address1:{
        streeyt1:"101",
        houseNO1:198
    }
  };
  const user2 = {
    user_name: "ishita",
    isLoggedIn: true, 
    lastLoginDays: ["monday", "wenesday"],
    address:{
        streeyt:"101",
        houseNO:198
    }
  };
// combinig objs 
const love = {...{},...user,...user2} // or we can sue love= Object.assign(obj1,obj2)
console.log(love);