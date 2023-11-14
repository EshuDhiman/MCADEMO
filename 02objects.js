const user = {
  user_name: "eshu",
  isLoggedIn: true,
  lastLoginDays: ["monday", "wenesday"],
};
const user2 = {
  user_name: "eshu",
  isLoggedIn: true,
  lastLoginDays: ["monday", "wenesday"],
  // [sym]: "this is a symbol",
};

console.table([user2.user_name]);
Object.freeze(user2); // changes will not propogates when the object is freezed
user2["user_name"] = "eshudhiman";
console.table([user2.user_name]);
user.hello = function greet() {
    //this is used to get properties of the same object in this case user
  console.log(`hello ${this.user_name}`); 
};
user.hello()
