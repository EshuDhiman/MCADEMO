    let heros = ["ironman", "captain america","spiderman"]
    let villans = new Array("thanos","dr doom","kang")
//methods
heros.pop()// pop the last element 
heros.push("wanda") // pushes elements
villans.unshift("black panther") // add element to 0th index
console.table([heros,villans])
villans.shift("black panther") // add element to 0th index
console.table([heros,villans])
let villans2 =  heros.join() // join the array and converts to string
console.table([villans2,typeof villans2] )

