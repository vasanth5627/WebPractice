// import playGuitar from "./script1.js";
//import { shredding,plucking } from "./script1.js";
// import { shredding as shred,plucking as pluck } from "./script1.js";

// console.log(playGuitar())
// console.log(shred())
// console.log(pluck())


// import * as Guitars from "./script1.js";
// console.log(Guitars.default());
// console.log(Guitars.plucking());
// console.log(Guitars.shredding());

import User from "./user.js"; //(default class does not need {})

const me = new User("vaa@email.com","vasanth");
console.log(me);
console.log(me.greeting())