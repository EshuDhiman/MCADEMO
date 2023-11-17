const user = {
    user_name: "eshu",
    isLoggedIn: true, // u can also use "" to declare key in objs
    lastLoginDays: ["monday", "wenesday"],
  };
  //obj destructuring 
  const {isLoggedIn} = user
  console.log(isLoggedIn);
  // can also change names 
  const {lastLoginDays: lasylog} =user
  console.log(lasylog);