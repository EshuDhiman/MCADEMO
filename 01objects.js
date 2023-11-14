const sym = Symbol('key1'); // we have to define an symbole before we can use it in objects
const user = {
  user_name: "eshu",
  isLoggedIn: true, // u can also use "" to declare key in objs
  lastLoginDays: ["monday", "wenesday"],
  [sym]: "this is a symbol", // this is how we declare symbols inside an object
};
console.table([typeof user["isLoggedIn"], typeof user[sym]]);
// accessing these objects
console.table([user.user_name, user["lastLoginDays"], user[sym]]); // for accessing the declared symbol the syntax is to not use ""
